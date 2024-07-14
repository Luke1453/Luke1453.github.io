<div class="switch-container">
	<input type="checkbox" id="switch" checked={true} />
	<label for="switch">
		<i class="fas fa-sun" />
		<i class="fas fa-moon" />
		<span class="ball" />
	</label>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	label {
		display: flex;
		width: 75px;
		height: 35px;
		justify-content: space-between;
		align-items: center;
		padding: 0 8px;
		background: #222;
		border-radius: 50px;
		cursor: pointer;
		position: relative;
	}

	label i {
		font-size: 18px;
	}

	label .fa-sun {
		transform: translateX(43px) rotate(250deg);
		color: gold;
		transition: 0.6s;
		opacity: 0;
	}

	label .fa-moon {
		color: #fff;
		transition: 0.6s;
		opacity: 1;
	}

	label .ball {
		position: absolute;
		display: block;
		width: 25px;
		height: 25px;
		top: 5px;
		left: 5px;
		background: #fff;
		border-radius: 50%;
		transition: 0.6s;
	}

	input:checked + label .fa-sun {
		transform: translateX(0) rotate(0);
		opacity: 1;
	}

	input:checked + label .fa-moon {
		transform: translateX(-43px);
		opacity: 0;
	}

	input:checked + label .ball {
		transform: translateX(40px) rotate(160deg);
		background: gold;
	}

	input:checked + label {
		background: rgba(0, 0, 0, 0.2);
	}

	input {
		display: none;
	}
</style>
