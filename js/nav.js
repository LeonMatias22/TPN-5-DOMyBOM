const generarNav = () => {
  const header = document.getElementById("header");
  const div = document.createElement("div");
  div.innerHTML = `<nav class="navbar bg-body-secondary mb-5">
  <div class="container">
    <a class="navbar-brand" href="../index.html">
      <img src="../assets/logo.png" alt="logo" width="70" height="70" />
    </a>
    <a href="../index.html">
    <button class="btn btn-outline-primary" type="submit">
      Volver
    </button>
  </a>
  </div>
</nav>`;

  header.appendChild(div);
};

export default generarNav;
