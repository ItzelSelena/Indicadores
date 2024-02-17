from django.http import HttpResponse
import datetime
from django.views.generic import TemplateView, ListView
from reportes.models import Agente
#creo :c ahhahaha ya será un problema para itzel del futuro xdxd emmm ir a mi pagina donde viene los metodos y ver para que sirven cada uno xdxdxd y poner el correcto y luego poner agente ahhhh no se xdxdxd 
#list view tiene más metodos y está nefocada en hacer una lista de objetos de una base de datos :3 gracias!!!! 

def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>ahora es :3  %s.</body></html>" % now
    return HttpResponse(html)

#no se hahah pero la clase ok... :3 
#lo de adentro de parentesis hereda de uy perdon template view :3  hahahahha fue im error :3
#sisoy
#efectivamente si eres, un machista opresor sisisisi:3 ño :3  oki  hahaha 
# voy
class HomeView(TemplateView): 
    # es un atributo así?
    template_name = "home.html"	
# este metodo ya esta construido vamos a acceder al contexto que ya tenia antes xd y...
# se tiene el metodo super .. si  
    def get_context_data(self, **kwargs):
        # está llamando a la función papá y sobreescribiendo porque se le van a poner mas contextos :3 
        # se convierte en un diccionario context 
        context = super().get_context_data(**kwargs)
        context ['nombre'] = "itzel(?)"
        # para confirmar, entonces context es un diccionario, en la cual se le crea una llave nueva que contiene un valor avavvavavavav <3 -->
        #bueno ya xd se me fué xd ntp :3 
        #osea como directamnete de los exceles? o como era? xd ammmm l de agentes :3  
        context ['apellido'] = "De la cruz"
        return context
    
class AgentLisView(ListView):
    #es para listar datos ListView y el template donde los va arrojar :3 y aqui se usa la base de datos 
    template_name = "list_agent.html" 
    model = Agente 
    # si// entonces con.all se traen a todos los objetos de la clase agente :3 siisisis y .filter solo filtra va me rindo hahahah me odio chale 
    # no haha salu2 agente es la llave?!objecti list entocnes es object list? 
    queryset = Agente.objects.all()


from rest_framework.views import APIView
from rest_framework.response import Response

class CardsDataAPIView(APIView):
    def get(self, request, format=None):
        cards_data = [
            {
                'title': "Calidad",
                'color': {
                    'backGround': "linear-gradient(180deg, #3498db, #2980b9)", 
                    'boxShadow': "0px 10px 20px 0px #e0c6f5",
                },
                'barValue': 93.4,
                'value': "93",
                'png': "UilClipboardAlt",  # Asegúrate de que UilClipboardAlt esté definido o importado correctamente
                'series': [
                    {
                        'name': "México",
                        'data': [78, 80, 28, 51, 80, 67, 98],
                    },
                    {
                        'name': "Guadalajara",
                        'data': [92, 87, 40, 89, 75, 56, 78],
                    }
                ],
            },
            {
                'title': "Adherencia",
                'color': {
                    'backGround': "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
                    'boxShadow': "0px 10px 20px 0px #FDC0C7",
                },
                'barValue': 87.2,
                'value': "87",
                'png': "UilClipboardAlt",
                'series': [
                    {
                        'name': "México",
                        'data': [10, 100, 50, 70, 80, 30, 40],
                    },
                    {
                        'name': "Guadalajara",
                        'data': [92, 87, 40, 89, 75, 56, 78],
                    },
                ],
            },
            {
                'title': "AHT",
                'color': {
                    'backGround': "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
                    'boxShadow': "0px 10px 20px 0px #F9D59B",
                },
                'barValue': 93,
                'value': "327 s",
                'png': "UilClipboardAlt",
                'series': [
                    {
                        'name': "México",
                        'data': [10, 25, 15, 30, 12, 15, 20],
                    },
                    {
                        'name': "Guadalajara",
                        'data': [92, 87, 40, 89, 75, 56, 78],
                    },
                ],
            }
        ]
        return Response(cards_data)


class ChartDataAPIView(APIView):
    def get(self, request, format=None):
        chart_data = {
            "options": {
                "chart": {
                    "type": "area",
                    "height": "auto",
                },
                "dropShadow": {
                    "enabled": False,
                    "enabledOnSeries": None,
                    "top": 0,
                    "left": 0,
                    "blur": 3,
                    "color": "#000",
                    "opacity": 0.35,
                },
                "fill": {
                    "colors": ["#fff"],
                    "type": "gradient",
                },
                "dataLabels": {
                    "enabled": False,
                },
                "stroke": {
                    "curve": "smooth",
                    "colors": ["white"],
                },
                "tooltip": {
                    "x": {
                        "format": "yyyy-MM",
                    },
                },
                "grid": {
                    "show": True,
                },
                "xaxis": {
                    "type": "datetime",
                    "categories": [
                        "2024-01",
                        "2024-02",
                        "2024-03",
                        "2024-04",
                        "2024-05",
                        "2024-06",
                        "2024-07",
                        "2024-08",
                        "2024-09",
                        "2024-10",
                        "2024-11",
                        "2024-12",
                    ],
                },
            },
        }
        return Response(chart_data)
