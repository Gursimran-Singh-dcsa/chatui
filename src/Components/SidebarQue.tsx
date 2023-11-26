import { DeleteFilled } from '@ant-design/icons';
const SidebarQues = ({ allQuestions }: { allQuestions: String[] }) => {
	return (
		<>
			{allQuestions.map((que: String, index) => {
				return (
					<div className="sidebarQuesWrapper" >
						{' '}
						<div key={index} className="sidebarQues">
							{que}
						</div>{' '}
						<DeleteFilled className='delbtn' style={{ cursor: 'pointer' }} />
					</div>
				);
			})}
		</>
	);
};
export default SidebarQues;
