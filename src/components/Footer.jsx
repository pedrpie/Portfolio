export default function Footer() {
    const year = new Date().getFullYear();

    return(
        <div className="bg-black text-center p-2 mt-10">
            <p>© {year} Pedro Costa. Todos os direitos reservados.</p>
        </div>
    )
}