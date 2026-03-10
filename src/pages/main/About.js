import './About.css'

export function About({text})
{
    return(
        <div className='wrap' style={{textAlign:'center', padding:'0 20px'}}>
            <h3>{text.title}</h3>
            <p>{text.description}</p>
        </div>
    )
}