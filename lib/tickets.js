import { randomBytes } from 'crypto';

export const TICKET_STATUSES = [
  'Received',
  'In Progress',
  'Awaiting Parts',
  'Ready for Collection',
  'Delivered',
];

export const DEVICE_TYPES = ['Mobile Phone', 'Laptop', 'Console', 'Tablet', 'Controller', 'Other'];
export const DELIVERY_METHODS = ['drop-off', 'delivery'];

/* Unguessable ticket numbers — the old Date.now() scheme let anyone
   enumerate neighbouring tickets from their own number. */
export function generateTicketNumber() {
  const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  const bytes = randomBytes(8);
  let out = '';
  for (let i = 0; i < 8; i++) out += alphabet[bytes[i] % alphabet.length];
  return `BT-${out}`;
}

const LIMITS = {
  fullName: 120,
  email: 180,
  phone: 40,
  issueDescription: 2000,
  address: 300,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates a public ticket submission. Returns { data } or { error }. */
export function validateTicketInput(body) {
  if (!body || typeof body !== 'object') return { error: 'Invalid request body' };

  const str = (v) => (typeof v === 'string' ? v.trim() : '');

  const fullName = str(body.fullName);
  const email = str(body.email);
  const phone = str(body.phone);
  const deviceType = str(body.deviceType);
  const issueDescription = str(body.issueDescription);
  const deliveryMethod = str(body.deliveryMethod) || 'drop-off';
  const address = str(body.address);

  if (!fullName || fullName.length > LIMITS.fullName) return { error: 'Please enter your name' };
  if (!email || email.length > LIMITS.email || !EMAIL.test(email)) {
    return { error: 'Please enter a valid email address' };
  }
  if (!phone || phone.length > LIMITS.phone) return { error: 'Please enter a phone number' };
  if (!DEVICE_TYPES.includes(deviceType)) return { error: 'Please choose a device type' };
  if (!issueDescription || issueDescription.length > LIMITS.issueDescription) {
    return { error: 'Please describe the fault' };
  }
  if (!DELIVERY_METHODS.includes(deliveryMethod)) return { error: 'Please choose a delivery option' };
  if (deliveryMethod === 'delivery' && (!address || address.length > LIMITS.address)) {
    return { error: 'Please enter a collection address' };
  }

  return {
    data: {
      fullName,
      email,
      phone,
      deviceType,
      issueDescription,
      deliveryMethod,
      address: deliveryMethod === 'delivery' ? address : null,
    },
  };
}
