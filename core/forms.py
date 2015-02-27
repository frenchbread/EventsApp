from models import Event
from django import forms


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        exclude = ("lat", "lng", "created_at", "timezone")
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Title'}),
            'details': forms.Textarea(attrs={'class': 'form-control dettails', 'placeholder': 'Details'}),
            'start_time': forms.TextInput(attrs={'class': 'form-control time0 start', 'placeholder': 'Start time'}),
            'start_date': forms.TextInput(attrs={'class': 'form-control date0 start', 'placeholder': 'Start date'}),
            'end_time': forms.TextInput(attrs={'class': 'form-control time1 end', 'placeholder': 'End time'}),
            'end_date': forms.TextInput(attrs={'class': 'form-control date1 end', 'placeholder': 'End date'}),
            'address': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'City, street, house/apartment..'}),
        }
