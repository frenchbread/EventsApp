from django.views.generic import TemplateView
from models import Event
from forms import EventForm
from django.core.context_processors import csrf
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.shortcuts import render_to_response, RequestContext

hello_world = TemplateView.as_view(template_name='hello-world.html')


@login_required
def newevent(request):

    args = {}
    args.update(csrf(request))

    #making some fun stuff-----------------------------------------------
    if request.POST:
        form = EventForm(request.POST, request.FILES)
        if form.is_valid():
            form = form.save(commit=False)
            form.user = request.user
            form.save()

            return HttpResponseRedirect(reverse('home'))
    else:
        form = EventForm()

    #packing bags and fly--------------------------------------------------
    args.update({'form': form})
    template = 'newEvent.html'
    context = RequestContext(request)
    return render_to_response(template, args, context_instance=context)