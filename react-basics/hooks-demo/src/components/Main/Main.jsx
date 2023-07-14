import CodeCMP from '../CodeCMP/CodeCMP';
import OutputCMP from '../OutputCMP/OutputCMP';
import './main.css'

const Main = ({ code, hookName, explanationCMP }) => {
    return <>
        <div className='main'>
            <div className='codePreviewWrapper'>
                <CodeCMP code={code} heading={hookName} />
            </div>
            <div className='codeOutputWrapper'>
                <OutputCMP explanationCMP={explanationCMP} />
            </div>
        </div>
    </>
}

export default Main;