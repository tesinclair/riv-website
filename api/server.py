from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="../frontend/static"), name="static")

templates = Jinja2Templates(directory="../frontend")

@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse(
            request=request, name="index.html", context={}
            )

@app.get("/msg-submit")
async def submit(request: Request, email: str, name: str, desc: str):
    return {'status': 200, 'message': 'OK'}

@app.get("/shop")
async def shop(request: Request):
    return templates.TemplateResponse(
            request=request, name="shop.html", context={}
            )

@app.get("/shop/submit")
async def submit_shop(request: Request):
    return {'status': 200, 'message': 'OK'}
