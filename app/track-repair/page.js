import { Suspense } from 'react';
import PageShell from '@/components/PageShell';
import TrackRepair from '@/components/TrackRepair';

export const metadata = {
  title: 'Track a Repair | ByTech',
  description: 'Check the progress of your ByTech repair using your ticket number.',
};

export default function TrackRepairPage() {
  return (
    <PageShell
      eyebrow="Track your repair"
      title="Where's my device?"
      intro="Enter the ticket number from your booking confirmation to see the latest update."
    >
      <Suspense fallback={null}>
        <TrackRepair />
      </Suspense>
    </PageShell>
  );
}
