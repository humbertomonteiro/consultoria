import './home.css'

export default function Home() {
    return (
        <main className='container-home'>
            <div className="container-presentation">
                <img src={require('../../assets/imgs/bg-presentation.jpg')} alt="" />
                <div className="presentation-text">
                    <h1>Serviços de Software</h1>
                    <p>
                    Seja bem-vindo ao nosso mundo de inovação e criação digital!
                    Estamos entusiasmados em apresentar nossos serviços de desenvolvimento
                    de software, onde transformamos ideias em realidade por meio de código
                    criativo e soluções tecnológicas avançadas.
                    </p>
                    <button>Solicitar Serviço</button>
                </div>
            </div>
            <div className="home-boxes">
                <div className="box box1">
                    <h2>Sistemas</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, 
                        minus. Placeat quam ut eligendi accusamus. Accusantium veritatis 
                        officia architecto molestiae fuga 
                    </p>
                </div>
                <div className="box box2">
                    <h2>Sistemas</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, 
                        minus. Placeat quam ut eligendi accusamus. Accusantium veritatis 
                        officia architecto molestiae fuga 
                    </p>
                </div>
                <div className="box box3">
                    <h2>Sistemas</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, 
                        minus. Placeat quam ut eligendi accusamus. Accusantium veritatis 
                        officia architecto molestiae fuga 
                    </p>
                </div>
                <div className="box box4">
                    <h2>Sistemas</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, 
                        minus. Placeat quam ut eligendi accusamus. Accusantium veritatis 
                        officia architecto molestiae fuga 
                    </p>
                </div>
            </div>
        </main>
    )
}