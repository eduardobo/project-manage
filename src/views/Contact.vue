<template>
    <b-container class="px-0 mb-4">
            <b-row>
                <b-col cols="12">
                    <h1 class="mt-5">Comienza ya tu proyecto!</h1>
                </b-col>
            
                <b-col cols="12" sm="12" md="12" lg="6" class="pl-1">
                    <b-col class="mx-1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam dignissimos sed rem perferendis eveniet at similique ea tempora inventore, ipsum dolorem illo repudiandae laboriosam optio magni, minima vitae debitis.
                    </b-col>
                </b-col>

                <b-col cols="12" sm="12" md="12" lg="6">
                    <b-row class="mx-0">
                        <b-col cols="12" sm="6" md="6" lg="6">
                            <b-col class="pl-0 d-flex align-content=start">
                                <small>Nombre</small>
                            </b-col>
                            <b-form-input placeholder="Tú nombre" type="text"></b-form-input>
                        </b-col>

                        <b-col cols="12" sm="6" md="6" lg="6">
                            <b-col class="pl-0 d-flex align-content=start">
                                <small>Telefono</small>
                            </b-col>
                            <b-form-input placeholder="Telefono" type="tel"></b-form-input>
                        </b-col>
                    </b-row>
                        

                        <b-col cols="12">
                            <b-col class="pl-0 d-flex align-content=start">
                                <small>Correo electronico</small>
                            </b-col>
                            <b-form-input class="pr-0 ml-0" placeholder="Correo" type="email"></b-form-input>
                        </b-col>

                        <b-col cols="12">
                            <b-col class="pl-0 d-flex align-content=start">
                                <small>Proyecto</small>
                            </b-col>
                            <b-form-textarea placeholder="Que esta pasando por tu mente que no haz realizado aun por falta de dinero?" rows="3"></b-form-textarea>
                            <b-col cols="12" class="d-flex flex-row-reverse">
                                <b-button @click="sendMail" variant="primary">Enviar</b-button>
                            </b-col>
                        </b-col>
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
var url = 'localhost/sendMail.php';
export default {
    name: 'Contact',
    data(){
        return{
            email: '',
            name: '',
            phone: '',
            project: '',
        }
    },
    methods:{
        sendMail(){
            this.$http.post(`http://localhost/sendMail.php`,{
                name: 'prueba',
                email: 'eduard_park.13@hotmail.com',
                phone: '44564123',
                project: 'proof'
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error)
            } )
        }
    }
}
</script>
