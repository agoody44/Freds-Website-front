import generic_house from '../imgs/generic_house.jpg'


export default function HomePage (props) {

    return (
        <main className='Page' id='back'>

            <div className='welcome'>
                <p>Hi my name is Fred I am a general contractor in Essex Ma. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vitae, aliquid numquam adipisci, libero voluptates quisquam velit ad ut nam reiciendis aut deserunt, culpa similique quia sequi temporibus. Recusandae, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis aperiam quas dignissimos, dolorem temporibus consequuntur. Delectus distinctio mollitia, provident aut inventore nobis vel autem fugit eligendi pariatur eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, unde rerum impedit inventore sed temporibus quaerat, fugiat architecto iste modi facere. Dolorem totam quod dignissimos fuga eum? Quae, hic tempore!</p>
            </div>
            <div className='Generic-House'>
                <img src={generic_house} alt='construction' className='generic-house' />
            </div>

        </main>
    )
}
