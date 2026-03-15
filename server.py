from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os


PORT = 8000


def main() -> None:
    root = Path(__file__).resolve().parent / "dist"
    if not root.exists():
        raise SystemExit("No existe la carpeta dist. Ejecuta primero: npm run build")

    os.chdir(root)
    server = ThreadingHTTPServer(("127.0.0.1", PORT), SimpleHTTPRequestHandler)
    print(f"Servidor listo en http://127.0.0.1:{PORT}")
    server.serve_forever()


if __name__ == "__main__":
    main()
