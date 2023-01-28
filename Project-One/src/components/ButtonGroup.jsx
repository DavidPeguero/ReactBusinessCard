export default function ButtonGroup(){
    return(
        <div className="card--buttongroup">
                <button onClick={() => window.location = 'mailto:david.peguero.cancel@gmail.com'} className="card--button button--email">Email</button>
                <button onClick={(e) => {e.preventDefault(); 
                    window.location.href='http://linkedin.com/in/david-peguero'}}
                     className="card--button button--linkedin">LinkedIn</button>
        </div>
    )

}