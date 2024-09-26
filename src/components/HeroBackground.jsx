import React, { useState, useEffect } from "react";

function HeroBackground() {
	useEffect(() => {
		const canvas = document.getElementById("hero-bg");
		const ctx = canvas.getContext("2d");

		canvas.width = document.body.clientWidth;
		canvas.height = window.innerHeight;

		let dots = [];
		const dotCount = (canvas.width * canvas.height) / 15000;
		const maxDistance = 150;

		let target = 0;
		let offset = 0;

		window.addEventListener("scroll", (e) => {
			target = window.scrollY;
		});

		class Dot {
			constructor(x, y, dx, dy) {
				this.x = x;
				this.y = y;
				this.dx = dx;
				this.dy = dy;
				this.radius = 4;
			}

			draw(offset) {
				ctx.beginPath();
				ctx.arc(
					this.x,
					this.y + offset,
					this.radius,
					0,
					Math.PI * 2,
					false
				);
				ctx.fillStyle = "rgba(255, 255, 255, 0.6 )";
				ctx.fill();
				ctx.closePath();
			}

			update() {
				if (
					this.x + this.radius > canvas.width ||
					this.x - this.radius < 0
				) {
					this.dx = -this.dx;
				}
				if (
					this.y + this.radius > canvas.height ||
					this.y - this.radius < 0
				) {
					this.dy = -this.dy;
				}

				this.x += this.dx;
				this.y += this.dy;
			}
		}

		function init() {
			dots = [];
			for (let i = 0; i < dotCount; i++) {
				const x = Math.random() * canvas.width;
				const y = Math.random() * canvas.height;
				const dx = (Math.random() - 0.5) * 0.7;
				const dy = (Math.random() - 0.5) * 0.7;
				dots.push(new Dot(x, y, dx, dy));
			}
		}

		function drawLines(dot1, dot2, offset) {
			const distance = Math.hypot(dot2.x - dot1.x, dot2.y - dot1.y);
			if (distance < maxDistance) {
				ctx.beginPath();
				ctx.moveTo(dot1.x, dot1.y + offset);
				ctx.lineTo(dot2.x, dot2.y + offset);
				ctx.strokeStyle = `rgba(255, 255, 255, ${
					1 - distance / maxDistance
				})`;
				ctx.lineWidth = 0.5;
				ctx.stroke();
				ctx.closePath();
			}
		}

		function lerp(start, end, t) {
			return start + t * (end - start);
		}

		function animate() {
			offset = lerp(offset, target, 0.5);

			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			dots.forEach((dot) => {
				dot.update();
				dot.draw(offset);
			});

			for (let i = 0; i < dots.length; i++) {
				for (let j = i + 1; j < dots.length; j++) {
					drawLines(dots[i], dots[j], offset);
				}
			}
		}

		init();
		animate();

		window.addEventListener("resize", () => {
			canvas.width = document.body.clientWidth;
			canvas.height = window.innerHeight;
			init();
		});
	});

	return <canvas id="hero-bg"></canvas>;
}

export default HeroBackground;
