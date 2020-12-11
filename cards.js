 Vue.component("post-section", {
    template: `
        <div class="container-fluid">
            <pagination></pagination>
        </div>
    `,
    data() {
        return {
            tabs: ["Programming", "Photography", "Tech News", "Personal Posts"]
        }
    }
})

Vue.component("pagination", {
    template: `
        <div class="row">
            <topics :selectedTab="selectedTab" @tabClicked="updateTab"></topics>
            <posts :selectedTab="selectedTab"></posts>
        </div>
    `,
    data() {
        return {
            selectedTab: "Programming"
        }
    },
    methods: {
        updateTab() {
            this.selectedTab = selectedTab
        }
    }
})

Vue.component("posts", {
    props: ["selectedTab"],
    template: `
        <div class="col-sm-12 col-md-10">
            <h3>Posts</h3>
            <div class="card-columns">
                <programming-posts v-show="selectedTab === 'Programming'"></programming-posts>
                <photography-posts v-show="selectedTab === 'Photography'"></photography-posts>
                <tech-posts v-show="selectedTab === 'Tech'"></tech-posts>
                <personal-posts v-show="selectedTab === 'Tech'"></personal-posts>
            </div>
        </div>
    `
})

Vue.component("programming-posts", {
    template: `
        <div class="programming-posts">
            <post title="PHP" description="A back-end language" fulldescription="PHP is a programming language primarily used for back-end web development. PHP allows you to make dynamic websites and establish connections to databases." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/12.jpg"></post>
            <post title="JavaScript" description="A front, and back-end language" fulldescription="Javascript is primarily used in front-end development to make sites interactive. It is also used to manipulate the DOM (Document Object Model) in a website. It is also used alongside NodeJs or Express as a back end." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg"></post>
            <post title="Python" description="A general-prupose language" fulldescription="Python is a multipurpose language. It can be used for web development, data science, and automation. Python has a very big library of modules which expand what python can do." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg"></post>
            <post title="Ruby" description="A general-prupose language" fulldescription="Ruby is a general-purpose language. It is dynamically typed and uses garbage collection. Ruby has some variations like Ruby on Rails and such." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg"></post>
            <post title="HTML" description="A front-end language" fulldescription="HTML is a language used to create the structure of a website. It is like the bones of a website." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg"></post>
            <post title="CSS" description="A front-end language" fulldescription="CSS is a language used to style HTML elements. It can do a lot, from just changing the alignment, to animating it and making it pop in colour." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg"></post>
            <post title="SQL" description="A back-end language" fulldescription="SQL is a language used to interact with a compatible database. SQL means Structured Query Language. You can do very advanced things with SQL." time="July 9, 2020 12:40" url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg"></post>
            <post title="C++" description="A general-prupose language" fulldescription="C++ is a language primarily used for developing desktop applications. It was previously known as C with classes." time="July 9, 2020 12:40" url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg"></post>
            <post title="Swift" description="A general-prupose language" fulldescription="Swift is a programming language used to develop applications for iOS, iPadOS, and MacOS devices." time="July 9, 2020 12:40" url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg"></post>
            <post title="Java" description="A general-prupose language" fulldescription="Java is a programming language used to develop Android and desktop applications." time="July 9, 2020 12:40" url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg"></post>
            <post title="TypeScript" description="A general-prupose language" fulldescription="TypeScript is a language primarily used in the development of React Native apps." time="July 9, 2020 12:40" url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/10.jpg"></post>
        </div>
    `,
    data() {
        return {

        }
    }
})

Vue.component("photography-posts", {
    template: `
        <div class="photography-posts">
            <post title="Canon Cameras" description="A back-end language" fulldescription="PHP is a programming language primarily used for back-end web development. PHP allows you to make dynamic websites and establish connections to databases." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/12.jpg"></post>
            <post title="Sony Cameras" description="A front, and back-end language" fulldescription="Javascript is primarily used in front-end development to make sites interactive. It is also used to manipulate the DOM (Document Object Model) in a website. It is also used alongside NodeJs or Express as a back end." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg"></post>
            <post title="iPhone Cameras" description="A general-prupose language" fulldescription="Python is a multipurpose language. It can be used for web development, data science, and automation. Python has a very big library of modules which expand what python can do." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg"></post>
            <post title="Composition" description="A general-prupose language" fulldescription="Ruby is a general-purpose language. It is dynamically typed and uses garbage collection. Ruby has some variations like Ruby on Rails and such." url="https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg"></post>
        </div>
    `
})

Vue.component("tech-posts", {
    template: `
        <div class="photography-posts">
            
        </div>
    `
})

Vue.component("personal-posts", {
    template: `
        <div class="personal-posts">
            
        </div>
    `
})

Vue.component("post", {
    props: ["title", "description", "fulldescription", "time", "url"],
    template: `
        <div class="card">
            <img :src="url" class="card-img-top" alt="cool design image">
            <div class="card-body">
                <h3 class="card-title">{{ title }}</h3>
                <h6 class="card-subtitle">{{ description }}</h6>
                <p class="card-text">{{ fulldescription }}</p>
                <hr>
                <button class="btn btn-secondary">Read more</button>
            </div>
            <div class="card-footer">{{ time }}</div>
        </div>
    `,
})

Vue.component("navigation-bar", {
    template: `
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light mt-0">
            <a class="navbar-brand" href="#">Dannermm</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="https://twitter.com/dannermm_">Twitter</a>
                    <a class="dropdown-item" href="https://instagram.com/dannermm">Instagram</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="https://github.com/dannermm">Github</a>
                    </div>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <a class="btn btn-outline-dark" href="#" role="button">Login</a>
                </form>
            </div>
        </nav>
    `
})

Vue.component("topics", {
    props: ["selectedTab"],
    template: `
        <div class="col-sm-12 col-md-2">
            <h3>Topics</h3>
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link tab" :class="{ activeTab: selectedTab === tab }" v-for="(tab, index) in tabs" :key="index" @click="tabClicked(tab)" style="cursor: pointer;">{{ tab }}</a>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: ["Programming", "Photography", "Tech", "Personal Posts"],
        }
    },
    methods: {
        tabClicked(tab) {
            selectedTab = tab;
            this.$emit("tabClicked", selectedTab)
        }
    }
})

var app = new Vue({
    el: "#app"
})

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}