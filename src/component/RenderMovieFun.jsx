import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/style.css'

function RenderMovieFun(poster, title, year, synopsis,) {
    return (
        // using card for main content
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mt-3">
                    <div class="card">
                        <div class="card-horizontal">
                            <div class="img-square-wrapper">
                                <img class="" src={poster} alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{title}</h4>
                                <small class="text-muted">{year}</small>
                                <p class="card-text">{synopsis}</p>
                            </div>
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderMovieFun;
