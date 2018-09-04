<template>
  <main>
    <div class="header-global">
      <base-nav class="navbar-main" transparent type="" effect="light" expand>
        <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
          <img src="LogoBarco.fw.png" class="img-fluid">
        </router-link>

        <div class="row" slot="content-header" slot-scope="{closeMenu}">
          <div class="col-6 collapse-brand">
            <a href="/">
              <img src="LogoHorizontal.fw.png">
            </a>
          </div>
          <div class="col-6 collapse-close">
            <close-button @click="closeMenu"></close-button>
          </div>
        </div>

        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown" role="button">
              <i class="ni ni-ui-04 d-lg-none"></i>
              <span class="nav-link-inner--text">Serviços</span>
            </a>
            <div class="dropdown-menu dropdown-menu-xl">
              <div class="dropdown-menu-inner">
                <a href="#"
                   class="media d-flex align-items-center">
                  <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                    <i class="ni ni-spaceship"></i>
                  </div>
                  <div class="media-body ml-3">
                    <h6 class="heading text-primary mb-md-1">Marketing</h6>
                    <p class="description d-none d-md-inline-block mb-0">
                      Desde um simples blog, até uma central de notícias. Com a Inovando Online você garante o seu
                      reconhecimento
                    </p>
                  </div>
                </a>
                <a href="#" class="media d-flex align-items-center">
                  <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                    <i class="ni ni-ui-04"></i>
                  </div>
                  <div class="media-body ml-3">
                    <h5 class="heading text-warning mb-md-1">Sistemas Web</h5>
                    <p class="description d-none d-md-inline-block mb-0">
                      Precisa de um sistema sob medida para administrar o seu negócio? Com a Inovando Online você
                      garante o
                      total funcionamento da sua empresa de forma organizada e funcional
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown" role="button">
              <i class="ni ni-collection d-lg-none"></i>
              <span class="nav-link-inner--text">Portfólio</span>
            </a>
            <div class="dropdown-menu">
              <a target="_blank" href="https://mariliagoes.com" class="dropdown-item">Marilia Góes</a>
              <a target="_blank" href="https://equinociohospitalar.com.br" class="dropdown-item">Equinócio
                Hospitalar</a>
              <a target="_blank" href="https://amprev.ap.gov.br" class="dropdown-item">Amapá Previdência</a>
              <a target="_blank" href="https://uninefro.com.br" class="dropdown-item">Uninefro</a>
              <a target="_blank" href="https://goap.org.br" class="dropdown-item">Grande Oriente Amapaense</a>
              <a target="_blank" href="https://jeepbluc.macapa.br" class="dropdown-item">JeepClub de Macapá</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://api.whatsapp.com/send?phone=5596984009050" target="_blank"
               data-toggle="tooltip" data-placement="bottom" title="Mande um WhatsApp">
              <i class="fa fa-whatsapp"></i>
              <span class="nav-link-inner--text d-lg-none">WhatsApp</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://www.facebook.com/inovandoonline" target="_blank"
               data-toggle="tooltip" data-placement="bottom" title="Curta no Facebook">
              <i class="fa fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://github.com/inovandoonline"
               target="_blank" data-toggle="tooltip" data-placement="bottom" title="Marque estrela no GitHub">
              <i class="fa fa-github"></i>
              <span class="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <a href="#faleConosco"
               class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-envelope mr-2"></i>
                </span>
              <span class="nav-link-inner--text">Fale Conosco</span>
            </a>
          </li>
        </ul>
      </base-nav>
    </div>
    <hero></hero>
    <div class="footer has-cards">
      <div class="container container-lg">
        <div class="row align-items-center my-md">
          <div class="col-lg-12 text-center">
            <h1>Portfólio</h1>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4 mb-5 mb-lg-0">
            <h3 class="mb-3">Portal Marilia Góes</h3>
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="Profile Page">
                <img v-lazy="'img/portfolio/marilia.png'" class="card-img">
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">
            <h3 class="mb-3">JeepClub de Macapá</h3>
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="Profile Page">
                <img v-lazy="'img/portfolio/jeepclub.fw.png'" class="card-img">
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">
            <h3 class="mb-3">Grande Oriente Amapaense</h3>
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="Profile Page">
                <img v-lazy="'img/portfolio/goap.fw.png'" class="card-img">
              </router-link>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4 mb-5 mt-5 mb-lg-0">
            <h3 class="mb-3">Amapá Previdência</h3>
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="Profile Page">
                <img v-lazy="'img/portfolio/amprev.fw.png'" class="card-img">
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-5 mt-5 mb-lg-0">
            <h3 class="mb-3">Uninefro</h3>
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="Profile Page">
                <img v-lazy="'img/portfolio/uninefro.fw.png'" class="card-img">
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-5 mt-5 mb-lg-0">
            <h3 class="mb-3">Equinócio Hospitalar</h3>
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="Profile Page">
                <img v-lazy="'img/portfolio/equinocio.fw.png'" class="card-img">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="faleConosco">
        <div class="row text-center justify-content-sm-center mt-5">
          <div class="alert alert-primary" role="alert">
            <strong>Sem compromisso</strong> Solicite agora mesmo o seu orçamento!
          </div>
        </div>
        <div class="row text-center justify-content-sm-center mt-2">
          <snackbar></snackbar>
        </div>
      </div>
      <div class="container">
        <div class="row text-center justify-content-sm-center mt-2">
          <form method="post" enctype="application/x-www-form-urlencoded" ref="contato" @submit.prevent="contato">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="form-group">
                  <div class="input-group input-group-alternative mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-user-circle-o"></i></span>
                    </div>
                    <input required :rules="notNullRule" v-model="nome" class="form-control form-control-alternative"
                           placeholder="Nome" type="text"/>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="form-group">
                  <div class="input-group input-group-alternative mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-world-2"></i></span>
                    </div>
                    <input required :rules="notNullRule" v-model="email" class="form-control form-control-alternative"
                           placeholder="E-mail"
                           type="email"/>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="form-group">
                  <div class="input-group input-group-alternative mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                    </div>
                    <input v-model="telefone"
                           class="form-control form-control-alternative"
                           placeholder="Telefone" type="email"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <textarea
                          class="form-control form-control-alternative" :rules="notNullRule" v-model="mensagem" required
                          rows="10"
                          placeholder="Pode falar a vontade"></textarea>
                <button @click="contato" class="btn btn-icon btn-3 btn-success mt-3" type="button">
                  <span class="btn-inner--icon"><i class="ni ni-send"></i></span>
                  <span class="btn-inner--text">Enviar</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="row align-items-center my-md">
          <div class="col-lg-6">
            <h3 class="text-primary font-weight-light mb-2">Inovando Online, você e sua empresa abrem as portas para o
              futuro!</h3>
            <h4 class="mb-0 font-weight-light">Solicite um orçamento sem compromisso</h4>
          </div>
          <div class="col-lg-6 text-lg-center btn-wrapper">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5596984009050"
               class="btn btn-neutral btn-icon-only btn-whatsapp btn-round btn-lg" data-toggle="tooltip"
               data-original-title="Fale Conosco pelo WhatsApp">
              <i class="fa fa-whatsapp"></i>
            </a>
            <a target="_blank" href="https://facebook.com.br/inovandoonline"
               class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
               data-original-title="Curta no Facebook">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a target="_blank" href="https://github.com/inovandoonline"
               class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
               data-original-title="Dê uma estrela no Github">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
        <hr>
        <div class="row align-items-center justify-content-md-between">
          <div class="col-md-6">
            <div class="copyright">
              &copy; {{ new Date().getFullYear() }}
              <a href="https://api.whatsapp.com/send?phone=5596984009050" target="_blank">Inovando Online</a>
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank">Trabalhe Conosco</a>
              </li>
              <li class="nav-item">
                <a href="/LICENSE.md"
                   class="nav-link" target="_blank">MIT License</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import firebase from 'firebase/app'
  import {mapMutations} from 'vuex'
  import Snackbar from '../components/Snackbar'

  export default {
    components: {
      Snackbar
    },
    data() {
      return {
        contatoForm: false,
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        notNullRule: [
          v => !!v || 'Campo Obrigatório!'
        ]
      }
    },
    methods: {
      contato() {
        const contato = {
          name: this.nome,
          mail: this.email,
          phone: this.telefone,
          msg: this.mensagem
        }
        if (this.nome !== '' || this.email !== '' || this.mensagem !== '') {
          return firebase.database().ref('contatos').push(contato)
            .then((d) => {
              console.log(d)
              this.nome = ''
              this.email = ''
              this.telefone = ''
              this.mensagem = ''

              this.setSnack('Muito Obrigado por entrar em contato conosco! Retornaremos em breve')
              this.setColor('success')
            })
            .catch((e) => {
              console.log(e)
              this.setSnack('Não foi possível enviar esta mensagem!')
              this.setColor('danger')
            })
        }
        this.setSnack('Verifique os campos do formulário')
        this.setColor('danger')
      },
      ...mapMutations({
        setSnack: 'setSnack',
        setColor: 'setColor'
      })
    }
  }
</script>

<style>
  .footer.has-cards {
    padding-top: 500px;
  }

  .btn-whatsapp, .btn-whatsapp:hover {
    color: #fff;
    background-color: #09d261;
    border-color: #09d261;
  }
</style>
