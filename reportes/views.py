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
