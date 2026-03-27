
 
# Create a simple modern portfolio HTML file

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oqbah Portfolio</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: #fff;
        }
        header {
            text-align: center;
            padding: 50px 20px;
            background: #1e293b;
        }
        header h1 {
            margin: 0;
            font-size: 40px;
        }
        header p {
            color: #94a3b8;
        }
        section {
            padding: 40px 20px;
            max-width: 1000px;
            margin: auto;
        }
        .card {
            background: #1e293b;
            padding: 20px;
            margin: 15px 0;
            border-radius: 12px;
        }
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        footer {
            text-align: center;
            padding: 20px;
            background: #1e293b;
            color: #94a3b8;
        }
        a {
            color: #38bdf8;
            text-decoration: none;
        }
    </style>
</head>
<body>

<header>
    <h1>Oqbah</h1>
    <p>Flutter Developer | Frontend Developer</p>
</header>

<section>
    <h2>About Me</h2>
    <div class="card">
        <p>
            I'm a mobile app developer with 4+ years of experience in Flutter,
            ASP.NET backend, and modern UI design.
        </p>
    </div>
</section>

<section>
    <h2>Projects</h2>
    <div class="projects">
        <div class="card">
            <h3>Ride Sharing App</h3>
            <p>Real-time rider & driver app using SignalR and Flutter.</p>
        </div>
        <div class="card">
            <h3>Game App</h3>
            <p>Fun quiz and mini games built with Flutter.</p>
        </div>
        <div class="card">
            <h3>Admin Dashboard</h3>
            <p>Angular dashboard connected with ASP.NET APIs.</p>
        </div>
    </div>
</section>

<section>
    <h2>Contact</h2>
    <div class="card">
        <p>Email: your@email.com</p>
        <p>GitHub: <a href="#">yourgithub</a></p>
    </div>
</section>

<footer>
    <p>© 2026 Oqbah</p>
</footer>

</body>
</html>
"""

file_path = "/mnt/data/oqbah_portfolio.html"
with open(file_path, "w") as f:
    f.write(html_content)

file_path
