// Elementos
const surpriseBtn = document.getElementById('surpriseBtn');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const container = document.querySelector('.container');

let musicPlaying = false;

// Eventos de botones
surpriseBtn.addEventListener('click', showSurprise);
musicBtn.addEventListener('click', toggleMusic);

// Mostrar sorpresa
function showSurprise() {
  // Crear modal
  const modal = document.createElement('div');
  modal.className = 'modal show';
  
  const messages = [
    {
      title: '🌍 4 años',
      text: '4 años de mensajes, videollamadas y fotos. Y en cada uno de ellos confirmo que eres la mujer más hermosa del mundo, sin importar los kilómetros.'
    },
    {
      title: '✈️ Planes futuros',
      text: 'Cuando finalmente la distancia termine, prepárate porque voy a molestarte en persona todos los días. Y sí, seguiré con las bromas de matrimonio 😂'
    },
    {
      title: 'nosequeponeraqui',
      text: 'Es loco cómo alguien a miles de kilómetros puede hacerme sonreír más que nadie cerca. Eres increíble'
    },
    {
      title: 'Bromita... o no',
      text: 'Dame la visa'
    },
    {
      title: 'Buajajaja',
      text: 'Ya le avisé al universo que en el futuro vivimos en el mismo lugar. No sé si como vecinos, mejores amigos... o esposos. 👀'
    },
    {
      title: 'Buajajajaja x2',
      text: 'A veces pienso en cómo sería todo si no hubiera distancia. Pero luego recuerdo que incluso así, eres lo mejor que me ha pasado.'
    },
    {
      title: 'Lalalala',
      text: '¿Cómo es posible que seas tan perfecta?'
    },
    {
      title: 'Ni se en que orden saldra esto XD',
      text: 'I miss you, I want to see you again :('
    }
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${randomMessage.title}</h2>
      <p>${randomMessage.text}</p>
      <button class="close-btn" onclick="this.parentElement.parentElement.remove()">Cerrar</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Crear corazones flotantes
  createConfetti();
}

// Alternar música
function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicBtn.style.opacity = '0.6';
    musicPlaying = false;
  } else {
    bgMusic.play();
    musicBtn.style.opacity = '1';
    musicPlaying = true;
  }
}

// Crear confeti de corazones
function createConfetti() {
  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.fontSize = Math.random() * 20 + 20 + 'px';
    confetti.style.zIndex = '101';
    confetti.textContent = ['💕', '💗', '💖', '💝', '✨'][Math.floor(Math.random() * 5)];
    confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Agregar animación de caída
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Crear corazones flotantes adicionales en la página
function createFloatingHearts() {
  const hearts = ['💕', '💗', '💖', '💝', '❤️'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.opacity = '0.6';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '5';
    heart.style.animation = `float-background ${Math.random() * 5 + 5}s linear forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 800);
}

// Agregar animación de flotación de fondo
const bgStyle = document.createElement('style');
bgStyle.textContent = `
  @keyframes float-background {
    to {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(bgStyle);

// Iniciar
createFloatingHearts();

// Click en cualquier lado (opcional)
document.addEventListener('dblclick', () => {
  createConfetti();
});
