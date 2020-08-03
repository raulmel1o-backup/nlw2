import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/61876523?s=460&u=47a6bdc791f73b979262fc5d8a57a3b8952fddbc&v=4" alt="Raul Mello"/>
                        <div>
                            <strong>Raul Mello</strong>
                            <span>Física</span>
                        </div>
                    </header>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum eleifend nibh, 
                    <br /><br />
                    non eleifend nisi ultricies nec. Nunc vehicula vitae diam quis rhoncus. Mauris et leo nec dui egestas pellentesque nec vitae turpis. Suspendisse vitae ligula placerat erat finibus ullamcorper.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$: 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;