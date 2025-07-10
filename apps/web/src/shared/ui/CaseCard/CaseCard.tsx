interface Case {
  client: string;
  niche: string;
  ctrBefore: string;
  ctrAfter: string;
  uplift: string;
  spend: string;
}

export default function CaseCard({ caseData }: { caseData: Case }) {
  return (
    <div className="bg-white shadow-sm rounded p-4 text-left text-base-900">
      <h3 className="font-semibold text-base-900 mb-1">{caseData.client}</h3>
      <p className="text-sm text-gray-700 mb-2">{caseData.niche}</p>
      <p>
        <strong>CTR:</strong> {caseData.ctrBefore} → {caseData.ctrAfter}
      </p>
      <p>
        <strong>Uplift:</strong> <span className="text-green-600">{caseData.uplift}</span>
      </p>
      <p>
        <strong>Расход:</strong> {caseData.spend}
      </p>
    </div>
  );
}
