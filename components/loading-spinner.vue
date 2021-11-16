<template>
	<div class="splash-screen">
		<div class="spinner-wrapper d-flex flex-column">
			<!-- <div class="spinner"></div> -->
			<div style="">
				<img height="150" src="/alraedah-logo.svg" alt="Alraedah's logo" />
			</div>
			<!-- <div id="floatingBarsG">
				<div class="blockG" id="rotateG_01"></div>
				<div class="blockG" id="rotateG_02"></div>
				<div class="blockG" id="rotateG_03"></div>
				<div class="blockG" id="rotateG_04"></div>
				<div class="blockG" id="rotateG_05"></div>
				<div class="blockG" id="rotateG_06"></div>
				<div class="blockG" id="rotateG_07"></div>
				<div class="blockG" id="rotateG_08"></div>
			</div> -->
		</div>
	</div>
</template>

<style scoped>
.splash-screen {
	background: #ffffff;
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 500000;
}

.spinner-wrapper {
	position: absolute;
	left: 50%;
	top: 40%;
	z-index: 100000;

	transform: translate(-50%, -50%);
}
/* .spinner {
	width: 80px;
	height: 80px;
	margin: 100px auto;
	background-color: rgb(4, 59, 238);

	border-radius: 100%;
	-webkit-animation: sk-scaleout 1s infinite ease-in-out;
	animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
	0% {
		-webkit-transform: scale(0);
	}
	100% {
		-webkit-transform: scale(1);
		opacity: 0;
	}
}

@keyframes sk-scaleout {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 0;
	}
}
#floatingBarsG {
	position: relative;
	width: 76px;
	height: 94px;
	left: 35%;
}
.blockG {
	position: absolute;
	background-color: #c4c4c4;
	width: 12px;
	height: 29px;
	border-radius: 10px 10px 0 0;
	transform: scale(0.4);
	animation-name: fadeG;
	animation-duration: 0.48s;
	animation-iteration-count: infinite;
	animation-direction: linear;
}
#rotateG_01 {
	left: 0;
	top: 34px;
	animation-delay: 0.18s;
	transform: rotate(-90deg);
}
#rotateG_02 {
	left: 10px;
	top: 12px;
	animation-delay: 0.24s;
	transform: rotate(-45deg);
}
#rotateG_03 {
	left: 32px;
	top: 4px;
	animation-delay: 0.3s;
	transform: rotate(0deg);
}
#rotateG_04 {
	right: 10px;
	top: 12px;
	animation-delay: 0.36s;
	transform: rotate(45deg);
}
#rotateG_05 {
	right: 0;
	top: 34px;
	animation-delay: 0.42000000000000004s;
	transform: rotate(90deg);
}
#rotateG_06 {
	right: 10px;
	bottom: 9px;
	animation-delay: 0.48s;
	transform: rotate(135deg);
}
#rotateG_07 {
	bottom: 0;
	left: 32px;
	animation-delay: 0.5399999999999999s;
	transform: rotate(180deg);
}
#rotateG_08 {
	left: 10px;
	bottom: 9px;
	animation-delay: 0.6s;
	transform: rotate(-135deg);
}
@keyframes fadeG {
	0% {
		background-color: #1e4382;
	}
	100% {
		background-color: #4c83bd;
	}
} */
@keyframes blink {
	0% {
		opacity: 1;
	}
	12.5% {
		opacity: 0.8;
	}
	25% {
		opacity: 0.5;
	}
	50% {
		opacity: 0.3;
	}
	62.5% {
		opacity: 0.5;
	}
	75% {
		opacity: 0.8;
	}
	100% {
		opacity: 1;
	}
}
img {
	animation: blink 2s;
	animation-iteration-count: infinite ease-in-out;
}
</style>
