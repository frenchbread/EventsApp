from models import Event
from django import forms


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        exclude = ("lat", "lng", "created_at", "timezone")
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Title'}),
            'details': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Details'}),
            'start_time': forms.TextInput(attrs={'class': 'form-control time0 start', 'placeholder': '09:00'}),
            'start_date': forms.TextInput(attrs={'class': 'form-control date0 start', 'placeholder': '10-01-2015'}),
            'end_time': forms.TextInput(attrs={'class': 'form-control time1 end', 'placeholder': '21:00'}),
            'end_date': forms.TextInput(attrs={'class': 'form-control date1 end', 'placeholder': '20-01-2015'}),
            'address': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'City, street, house/apartment..'}),
        }
