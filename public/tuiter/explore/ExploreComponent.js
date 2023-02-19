import PostSummaryList
    from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row form-group">
                <div class="col-10">
                    <i class="fa-solid fa-magnifying-glass fa pt-2 ps-3 position-absolute"></i>
                    <input class="form-control ps-5 rounded-pill" type="text" placeholder="Search Tuiter">
                </div>
                <span class="ms-3 col-1">
                    <i class="fa fa-cog fa-2x text-primary"></i>
                </span>
            </div>
            <div class="row m-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-inline-block">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
             <div class="card m-2">
                <img src="../../images/spacex-starship.JPG" class="card-img"/>
                <h3 class="card-img-overlay text-light">SpaceX's Starship</h3>
                <!-- image with overlaid text -->
                ${PostSummaryList()}
            </div>
    `);
}
export default ExploreComponent;
