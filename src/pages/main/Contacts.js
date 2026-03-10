import './Contacts.css'

export function Contacts()
{
    const text={
        title:'Contact',
        description:'thedatadb (at) gmail.com'
    }
    return(
        <div className='wrap'>
            <h3>{text.title}</h3>
            <p>{text.description}</p>
        </div>
    )
}