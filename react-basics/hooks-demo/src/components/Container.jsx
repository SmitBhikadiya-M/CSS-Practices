import './container.css'

const Container = ({props, children}) => {
    return <>
        <div className="container" {...props}>{children}</div>
    </>
}

export default Container;