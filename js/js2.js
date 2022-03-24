/*const conteiner = document.querySelector('.conteiner');
		for (var i = 1; i <= 7; i++){
			const hearts = document.createElement('div');
			hearts.classList.add('heart');
			conteiner.appendChild(hearts);
		}

		function animateHearts(){
			anime({
				targets: '.heart',
				translateX: function(){
					return anime.random(-700,700);
				},
				translateY: function(){
					return anime.random(-500,500);
				},
				scale:function(){
					return anime.random(1,4);
				},
				easing: 'easeInOutBack',
				duration: 3000,
				delay: anime.stagger(10),
				complete: animateHearts,
			})
		};
		

		animateHearts();*/