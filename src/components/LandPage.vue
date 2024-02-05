<template>
    <div>
        <header class="bg-gray text-dark text-center py-5">
            <h1 class="display-4 mt-4">Bienvenido a nuestra pagina de autos</h1>
            <p class="lead">¡¡Descrubre nuestros autos nuevos!!</p>
            <a href="/inicio" class="btn btn-primary btn-lg mt-3">CLICK PARA IR A PAGINA DE INICIO</a>
        </header>

        <section class="container my-5">
            <h2 class="text-center mb-4">AUTOS </h2>

            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="data:image/jpeg;base64,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"
                            class="card-img-top" alt="Feature 1" />
                        <div class="card-body">
                            <h5 class="card-title">Autos</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTFqN7iJGD1qoboozDtMmMBLKDotbCVS6MA&usqp=CAU"
                            class="card-img-top" alt="Feature 2" />
                        <div class="card-body">
                            <h5 class="card-title">Autos</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01AQJRGxlSrQur-HisWHs9sGWP-yb_mJg0w&usqp=CAU"
                            class="card-img-top" alt="Feature 3" />
                        <div class="card-body">
                            <h5 class="card-title">Autos</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                            </p>
                        </div>
                    </div>
                </div>

                <div class="div">
                    <p>Lorem ipsum dolor sit amet. Non nobis accusantium At aspernatur dolores <em>Et impedit et nesciunt
                            praesentium</em>. Et placeat laudantium <strong>Qui rerum in nobis minus et modi iusto</strong>
                        est facere minima aut reprehenderit alias. Aut voluptas saepe est exercitationem ducimusVel odit ex
                        consequatur recusandae. </p>
                    <p>Ex ipsa officiis <strong>Et iusto ut iusto harum aut impedit omnis</strong>. Quo aliquam odio et
                        suscipit sequiEos porro. Qui quaerat quia <em>Eum voluptas ut dolorem adipisci non tempora tempore
                            aut recusandae omnis</em>. </p>
                    <p>Et sunt expedita <strong>Qui esse in dolor obcaecati in consequatur accusamus</strong> et autem
                        exercitationem eos minus consequatur 33 maiores corporis. Et voluptates voluptatibus <em>Qui
                            earum</em> ab debitis molestias qui voluptas adipisci! </p>
                    <p>Ut quia vitae est dolor tempora <em>Eum rerum qui itaque voluptatem sit culpa repellendus ab
                            voluptatum ullam</em> non consectetur nostrum. Ad consectetur perspiciatis <strong>At quis ut
                            nesciunt galisum rem consequatur laborum</strong> et tenetur odio. Ab optio natusEos culpa non
                        praesentium quas. </p>
                    <p>Eos maxime deleniti hic nihil voluptatem <em>Qui beatae ut autem nobis ea tempore deleniti qui
                            voluptatem numquam</em> aut nesciunt galisum. Id laboriosam nihil est quis nemoeum magni ut
                        distinctio libero? Et esse aliasAut asperiores aut consectetur debitis qui cumque consequatur aut
                        accusantium maiores non dolorem dolor! </p>
                    <ol>
                        <li>Sit aspernatur quaerat non exercitationem sint qui labore maxime. </li>
                        <li>Aut enim distinctio nam dolores quod id sapiente omnis qui quisquam accusamus. </li>
                        <li>Qui placeat quas eum adipisci distinctio eos omnis voluptate ad quis illum! </li>
                        <li>Non consequatur voluptatum ut sunt galisum. </li>
                    </ol>
                    <p>Aut deleniti galisum aut facilis fugasit velit in sint eveniet et nulla reiciendis? Eum dolorum
                        nesciunt <strong>Et eaque eum voluptatem ipsa ut maiores laboriosam</strong>! Non expedita galisumUt
                        corrupti ab neque voluptatem. </p>
                    <p>Qui voluptas deserunt <strong>Eum praesentium qui enim commodi ex quasi ullam</strong> cum aliquam
                        perferendis et cumque ullam. In voluptate aspernatur quo cumque repellat <em>Non dolores eos
                            expedita nesciunt non voluptate voluptatem hic alias asperiores</em>. 33 debitis officiaSed
                        facilis non fuga modi est architecto voluptatem rem animi dolorum est dolor molestiae vel
                        necessitatibus voluptate. Ut enim aliasEum illo est culpa provident. </p>

                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyr3lrdUSa54-HRtwqgoQrI5VX9O60O-0vg&usqp=CAU"
                            class="card-img-top" alt="Feature 3" />
                        <div class="card-body">
                            <h5 class="card-title">Autos</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZ7-n9Gj_30IaNp8nOaO8WFqxLuBJPUkjZw&usqp=CAU"
                            class="card-img-top" alt="Feature 3" />
                        <div class="card-body">
                            <h5 class="card-title">Autos</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://cdn.forbes.com.mx/2023/05/autos-mas-baratos-bajo-menor-precio.webp"
                            class="card-img-top" alt="Feature 3" />
                        <div class="card-body">
                            <h5 class="card-title">Autos</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                                Lorem ipsum dolor sit amet. In perspiciatis distinctio ab dolorem obcaecati
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <footer class="bg-gray text-dark text-center py-3">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div class="social-icons mt-3">
                <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-light me-3"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-light"><i class="fab fa-instagram"></i></a>
            </div>
        </footer>
</div></template>
  
<script>
export default {};
</script>
  
<style>.bg-gray {
    background-color: #b3b2b2;
}

img {
    height: 200px;
}

.card-title {
    align-items: center;
    justify-content: center;
    display: flex;
}

.card-text {
    text-align: justify;
}

.div {
    text-align: justify;
}</style>