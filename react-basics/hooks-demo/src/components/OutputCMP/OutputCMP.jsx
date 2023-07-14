import './outputcmp.css'

const OutputCMP = ({ explanationCMP, heading }) => {
    return <>
        <div className='outputcmp'>
            <div className='blockHeader'>
                {heading ?? 'Output'}
            </div>
            <div className='explanation'>{explanationCMP}</div>
        </div>
    </>
}

export default OutputCMP;