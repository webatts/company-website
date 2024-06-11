import { Checkbox, Modal } from 'antd';
import React from 'react';
export function TermsAndCondtions({
	showTerms,
	setShowTerms,
	isAccetingTerms,
}: {
	showTerms: boolean;
	setShowTerms: (value: boolean) => void;
	isAccetingTerms: (value: boolean) => void;
}) {
	const [acceptTerms, setAccetTerms] = React.useState(false);
	return (
		<Modal onCancel={() => setShowTerms(false)} open={showTerms} width={700} footer={null}>
			<div className='flex items-center text-2xl justify-center'>
				<p className='ps-[10px] text-[18px] font-bold text-[#00afff] my-0 underline'>
                     Terms And Conditions
				</p>
			</div>

			<div className='content mb-2'>
				<p className='my-0 text-black font-bold'>Registration And qualification:</p>
				<p className='my-0 text-[#333]'>-Merchants must register as webatts Merchant and provide the required information for qualification.</p>
				<p className='my-0 text-[#333]'>-Merchants must provide valid identity documents with proof of residence, and a meeting will be held with the merchant to authenticate his account.</p>
				<p className='my-0 text-[#333]'>-Merchants must provide valid identity documents with proof of residence, and a meeting will be held with the merchant to authenticate his account.</p>
				<p className='my-0 text-black font-bold'>Transactions and fees</p>
				<p className='my-0 text-[#333]'>-Merchants must comply with the approved fees and rates for the webatts Merchant service</p>
				<p className='my-0 text-[#333]'>-The company has the right to update fees and prices and notify merchants of this.</p>
			</div>
			<Checkbox
				checked={acceptTerms}
				onChange={(e) => setAccetTerms(e.target.checked)}
				style={{ marginBottom: '20px', direction: 'ltr' }}
			>
				Accept Terms
			</Checkbox>
			<div>
				<button
					className='bg-[#0183ff] border-none text-[white] w-[110px] h-[56px]  rounded mx-2'
					style={{
						cursor: 'pointer',
						margin: '0 auto',
						maxWidth: '100px',
						height: '36px',
						fontWeight: 400,
						opacity: acceptTerms ? '1' : '.5',
					}}
					disabled={!acceptTerms}
					onClick={() => {
						setShowTerms(false);
						isAccetingTerms(acceptTerms);
					}}
				>
					Aggree
				</button>
				<button
					className='bg-[white] border-[black] w-[100px] h-[36px] mx-2 rounded'
					onClick={() => setShowTerms(false)}
				>
					cancel
				</button>
			</div>
		</Modal>
	);
}
