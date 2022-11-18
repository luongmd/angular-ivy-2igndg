import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public src =
    'data:application/pdf;base64,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PjIwMTctMTAtMjZUMTU6Mjg6MjMrMDU6MzA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnV1aWQ6MTM1YWIzM2ItOWVjZC00NGE2LWE2NzgtOGQ3MjA4MWYwZmI4PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD51dWlkOmVmZjBhNzgwLTNlNmUtNGJkOS05MDU0LWI1NGIxM2UzODhhODwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPGRjOmZvcm1hdD5hcHBsaWNhdGlvbi9wZGY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pg0KZW5kc3RyZWFtDWVuZG9iag0xOCAwIG9iag08PC9BY3JvRm9ybSAzMSAwIFIvTWV0YWRhdGEgNCAwIFIvUGFnZXMgMTQgMCBSL1R5cGUvQ2F0YWxvZz4+DWVuZG9iag0yMiAwIG9iag08PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDQ1Nz4+c3RyZWFtDQpIiYRTTY/TMBC9W/J/8AUBh0z9Nf64tou47Akicc6mTjdSmyxJBIJfj5NuKYUykRU543nz3vPY/srZG7F7rrpDEnVf9MO+7aopifHHOKWTmHpxTM20mfoX4EyBlOLy/Q6C1fMk6tPCdWxfxKkaDm035hIr51xxnlDhEnm3VAyJs2fOvohuLiyHqhuPs/a/Pu5q31Av6puH9K2t06ePW7H7fBPW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';
}
