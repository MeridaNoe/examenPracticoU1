<template>
    <b-container class="mt-5">
        <h1>PAGINATION</h1>


        <b-col sm="5" md="6" class="my-1">
            <b-form-group label="" label-for="per-page-select" label-cols-sm="6" label-cols-md="4" label-cols-lg="3"
                label-align-sm="right" label-size="sm" class="mb-0">
                <b-form-select class="select-box" id="per-page-select" v-model="perPage" :options="pageOptions"
                    size="sm"></b-form-select>
            </b-form-group>
        </b-col>
        <b-table id="my-table" :items="autos" :per-page="perPage" :current-page="currentPage" :fields="fields"
            :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" small></b-table>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                aria-controls="my-table"></b-pagination>
            <p class="mt-3 p">Current Page: {{ currentPage }}</p>
        </div>
        <b-breadcrumb class="bread" :items="items"></b-breadcrumb>
    </b-container>
</template>

<script>
import autos from '../services/Autos';

export default {
    data() {
        return {
            items: [
                {
                    text: "Formulario",
                    href: "/formulario",
                    name: "formulario",
                },
                {
                    text: "Pagination",
                    href: "/page",
                    name: "page",
                },
            ],
            filtro: null,
            sortBy: "name",
            sortDesc: false,
            perPage: 5,
            rows: 3,
            currentPage: 1,
            pageOptions: [5, 10, 15, { value: 100, text: "Muestra muchos" }],
            autos: [],
            fields: [
                { key: "brand", label: "Marca", sortable: true },
                { key: "model", label: "Modelo", sortable: true },
                { key: "serie", label: "Serie", sortable: true },
                { key: "year", label: "Año", sortable: true },
            ],
        };
    },
    mounted() {
        this.obtenerAutos();
    },
    methods: {
        async obtenerAutos() {
            try {
                const data = await autos.obtenerAutos(
                    parseInt(this.currentPage),
                    parseInt(this.perPage),
                    this.rows
                );
                this.autos = data.content;
                this.rows = data.totalElements;
            } catch (error) {
                console.error(error);
            }
        },

    },
};
</script>

<style>
.bread {
    font-size: larger;
}

.select-box {
    border-radius: 5px;
    font-size: larger;
    border-color: black;
}

.p{
    font-weight: bolder;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
}
</style>