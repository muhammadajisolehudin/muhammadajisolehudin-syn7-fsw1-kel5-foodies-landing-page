const hey = () => {
  alert('hey!');
};

console.log('App is running...');
const app = document.getElementById('app');

app.innerHTML = `
    <h1>Halo</h1>
    <p class="border border-2 text-red-500">Lagi belajar GIT nih!</p>
    <h2>Ini perubahan code nya!</h2>
    <h2>Ini perubahan selanjutnya</h2>
    <div>
        <button onclick="hey()" class="bg-red-500">Klik di sini</button>
    </div>
`;
