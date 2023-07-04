import './App.css';

function App() {
    {/*1. Описати всю сім'ю сімпсонів (5 персонажів). Характеристики :
          ім‘я приізвище вік стать,
          фотографія (посиланням на зовнішній ресурс,тобто не локальна фотка)
          */
    }

    class Simpson {
        constructor(name, surname, age, gender, photo) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.gender = gender;
            this.img = photo
        }

        info() {
            return <div>{this.name} {this.surname} {this.age} {this.gender}</div>

        }
    }

    const homer = new Simpson('Homer', 'Simpson', 37, 'male', 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png');
    const bart = new Simpson('Bart', 'Simpson', 14, 'male', 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png');
    const lisa = new Simpson('Lisa', 'Simpson', 7, 'female', 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png');
    const marge = new Simpson('Marge', 'Simpson', 35, 'female', 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png');
    const maggie = new Simpson('Maggie', 'Simpson', 2, 'female', 'https://en.wikipedia.org/wiki/Maggie_Simpson#/media/File:Maggie_Simpson.png');
    const grampa = new Simpson('Grampa', 'Simpson', 65, 'male', 'https://upload.wikimedia.org/wikipedia/en/3/3e/Abe_Simpson.png');

    return (
        <div className="App">
            <div>
                {homer.info()}
                <img src={homer.img} alt=""/>
            </div>
            <div>
                {bart.info()}
                <img src={bart.img} alt=""/>
            </div>
            <div>
                {lisa.info()}
                <img src={lisa.img} alt=""/>
            </div>
            <div>
                {marge.info()}
                <img src={marge.img} alt=""/>
            </div>
            <div>
                {maggie.info()}
                <img src={maggie.img} alt=""/>
            </div>
            <div>
                {grampa.info()}
                <img src={grampa.img} alt=""/>
            </div>
        </div>
    );
}

export default App;
