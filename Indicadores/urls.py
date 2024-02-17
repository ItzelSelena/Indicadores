from django.contrib import admin  # Importa el módulo de administración de Django
from django.urls import path, include  # Importa las funciones de enrutamiento de Django
from django.views.generic import TemplateView  # Importa la vista genérica de plantilla de Django

from django.contrib import admin  # Importa el módulo de administración de Django
from django.urls import path, re_path, include  # Importa las funciones de enrutamiento de Django
from django.views.generic import TemplateView  # Importa la vista genérica de plantilla de Django
from django.conf.urls.static import static  # Importa la función static para servir archivos estáticos
from django.conf import settings  # Importa la configuración del proyecto Django
from reportes.views import CardsDataAPIView, ChartDataAPIView
#MyTokenObtainPairView, get_perfil, SelectItemsDDA  # Importa las vistas personalizadas del proyecto

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),  # Ruta para acceder a la interfaz de administración de Django
    path('reportes/', include('reportes.urls')),  # Ruta para incluir las URLs de la aplicación 'reportes'
    path('api/cards/data', CardsDataAPIView.as_view()),  # Ruta para incluir las URLs de la API de la aplicación 'reportes'
    path('api/cards/graphics', ChartDataAPIView.as_view()),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # Ruta para servir archivos multimedia

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]  # Ruta para cualquier otra URL que no coincida con las anteriores
