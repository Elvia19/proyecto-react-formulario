function App() {
return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<form className="bg-white p-6 rounded-lg shadow-md w-80">
<h1 className="text-2xl font-bold mb-4 text-center">Formulario</h1>


<input
type="text"
placeholder="Nombre"
className="w-full mb-3 p-2 border rounded"
/>


<input
type="email"
placeholder="Email"
className="w-full mb-3 p-2 border rounded"
/>


<button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
Enviar
</button>
</form>
</div>
)
}


export default App
