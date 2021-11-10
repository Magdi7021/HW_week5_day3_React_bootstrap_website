function card(props) {
    return(
    <div class ="card">
    <img src={props.image}> class="card-img-top" alt="..." height="400px"/>
    < div clss="card-body">
        <h6 class="card-title">{props.title}</h6>
        <p class="card-text">{props.body}</p>
        <a href="#" class="btn btn-success">read More</a>
        </div>
        </div>
        )
        }
        export default card