import PageShell from '@/components/PageShell';
import RepairRequestForm from '@/components/RepairRequestForm';
import { CONTACT, BUSINESS } from '@/lib/content';
import { ClockIcon, PinIcon, ShieldCheckIcon } from '@/components/Icons';

export const metadata = {
  title: 'Book a Repair | ByTech',
  description: 'Book a device repair with ByTech in Renfrew. Free diagnosis before any work starts.',
};

export default function BookRepairPage() {
  return (
    <PageShell
      eyebrow="Book a Repair"
      title="Tell us what broke."
      intro="Send the details and we'll come back with a diagnosis and a price before any work starts."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)]">
        <div className="glass-panel-heavy rounded-panel-lg p-8 sm:p-10">
          <RepairRequestForm deviceTypes={CONTACT.deviceTypes} />
        </div>

        <aside className="flex flex-col gap-5">
          <InfoCard icon={<ShieldCheckIcon width={20} height={20} />} title="Free diagnosis">
            We open it up, find the actual fault, and quote before touching anything. No fee if you
            decide not to go ahead.
          </InfoCard>
          <InfoCard icon={<ClockIcon width={20} height={20} />} title="Opening hours">
            <dl className="space-y-2">
              {BUSINESS.hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4">
                  <dt>{row.days}</dt>
                  <dd className="text-text-primary">{row.time}</dd>
                </div>
              ))}
            </dl>
          </InfoCard>
          <InfoCard icon={<PinIcon width={20} height={20} />} title="Drop-off address">
            {BUSINESS.address}
          </InfoCard>
        </aside>
      </div>
    </PageShell>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="glass-panel-light rounded-panel p-6">
      <div className="flex items-center gap-3">
        <span className="text-brand-red-bright">{icon}</span>
        <p className="text-heading-sm text-text-primary">{title}</p>
      </div>
      <div className="mt-3 text-body-sm text-text-muted">{children}</div>
    </div>
  );
}
