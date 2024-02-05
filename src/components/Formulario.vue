<template>
    <div>
        <h1>Registro de Vehículo</h1>

        <b-form @submit.prevent="submitForm">
            <b-form-group id="marcaGroup" label="Marca" label-for="marca" :state="marcaState">
                <b-input class="input" id="marca" v-model="marca" placeholder="Marca" @input="validateMarca"></b-input>
                <b-form-invalid-feedback :state="marcaState">
                    Ingresa una marca.
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="modeloGroup" label="Modelo" label-for="modelo" :state="modeloState">
                <b-input class="input" id="modelo" v-model="modelo" placeholder="Modelo" @input="validateModelo"></b-input>
                <b-form-invalid-feedback :state="modeloState">
                    Ingresa un modelo alfanumérico sin signos.
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="anioGroup" label="Año de fabricación" label-for="anio" :state="anioState">
                <b-input class="input" id="anio" v-model="anio" type="number" placeholder="Año de fabricación"
                    @input="validateAnio"></b-input>
                <b-form-invalid-feedback :state="anioState">
                    {{ anioState === false ? "Ingresa un año de fabricación válido." : "El año de fabricación no mayor al actual." }}
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="numeroSerieGroup" label="Número de serie" label-for="numeroSerie" :state="numeroSerieState">
                <b-input class="input" id="numeroSerie" v-model="numeroSerie" placeholder="XXXX000-00XX"
                    @input="validateNumeroSerie"></b-input>
                <b-form-invalid-feedback :state="numeroSerieState">
                    El número de serie no cumple con el formato requerido.
                </b-form-invalid-feedback>
            </b-form-group>

            <div class="button">
                <b-button variant="primary" @click="mostrarSweetAlert">Registrar</b-button>
            </div>
        </b-form>

        <p class="p" v-if="error">{{ error }}</p>

        <b-breadcrumb class="bread" :items="items"></b-breadcrumb>
    </div>
</template>
  
<script>

import Swal from 'sweetalert2';
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
                {
                    text: "",
                    href: "",
                    name: "",
                },
            ],
            marca: '',
            modelo: '',
            anio: null,
            numeroSerie: '',
            error: null,
            marcaState: null,
            modeloState: null,
            anioState: null,
            numeroSerieState: null,
        };
    },
    methods: {
        mostrarSweetAlert() {
            this.validateData();
            if (!this.error) {
                Swal.fire({
                    title: 'Éxito!',
                    text: 'Se ha registrado el auto',
                    icon: 'success',
                    confirmButtonText: 'Entendido',
                });
            }
        },
        submitForm() {
            this.validateData();
        },
        validateMarca() {
            this.marcaState = /^[a-zA-Z0-9]+$/.test(this.marca) ? true : false;
        },
        validateModelo() {
            this.modeloState = /^[a-zA-Z0-9]+$/.test(this.modelo) ? true : false;
        },
        validateAnio() {
            const currentYear = new Date().getFullYear();
            if (!this.anio) {
                this.anioState = false;
            } else if (this.anio <= currentYear) {
                this.anioState = true;
            } else {
                this.anioState = false;
            }
        },
        validateNumeroSerie() {
            this.numeroSerieState = /^[a-zA-Z]{4}\d{3}-\d{2}[a-zA-Z]{2}$/.test(this.numeroSerie) ? true : false;
        },
        validateData() {
            this.error = null;

            this.validateMarca();
            this.validateModelo();
            this.validateAnio();
            this.validateNumeroSerie();

            if (!this.marcaState || !this.modeloState || !this.anioState || !this.numeroSerieState) {
                this.error = 'Por favor, completa todos los campos correctamente.';
            }
        },
    },
};
</script>

<style>
.bread {
    font-size: larger;
}

.input {
    width: 1500px;
}

.p{
    font-size: x-large;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button{
    padding-top: 40px;
}
</style>