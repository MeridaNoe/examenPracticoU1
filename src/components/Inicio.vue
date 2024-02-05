<template>
    <div>
        <div>
            <b-navbar class="bg-gray" toggleable="lg">
                <b-navbar-brand href="/">LANDING-PAGE</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </b-navbar>
        </div>

        <b-row>
            <div class="grid-container">
                <div class="sidebar  fixed-sidebar">
                    <b-card title="Sidebar" class="mb-2 sidebar">
                        <b-card-text>
                            <b-nav vertical class="pt-5">

                                <b-nav-item>
                                    <b-link :to="{ name: 'formulario' }"
                                        active-class="link-seleccionado">FORMULARIO</b-link>
                                </b-nav-item>
                            </b-nav>
                        </b-card-text>
                    </b-card>
                </div>
                <b-col>
                    <router-view />

                </b-col>
            </div>
        </b-row>


    </div>
</template>

<script>
</script>



<style>
h1 {
    align-items: center;
    justify-content: center;
    display: flex;
}

.bread {
    margin-top: 50px;
}

.grid-container {
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: auto;
    grid-template-areas: "sidebar content";
    gap: 1rem;
    border: none;
    border-radius: none;
}

.sidebar {
    background-color: #ffffff;
    height: 100%;
    min-height: 100vh;
}



.content {
    grid-area: content;
}

.bg-gray {
    background-color: #b3b2b2;
}
</style>