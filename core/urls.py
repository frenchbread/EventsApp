from django.conf import settings
from django.conf.urls.defaults import url, patterns, include
from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('core.views',
    url(r'^$', 'hello_world', {}, name='home'),
    url(r'^new/$', 'newevent', name='newevent'),
    url(r'^admin/', include(admin.site.urls)),
)


if settings.DEBUG:
    urlpatterns += patterns('django.views.generic.simple',
        url(r'^500/$', 'direct_to_template', {'template': '500.html'}),
        url(r'^404/$', 'direct_to_template', {'template': '404.html'}),
    )
