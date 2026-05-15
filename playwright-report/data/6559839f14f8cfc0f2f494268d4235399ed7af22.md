# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\flujo5-comparacion.e2e.spec.ts >> @e2e Flujo 5 - Comparación crédito consumo vs hipotecario
- Location: tests\e2e\flujo5-comparacion.e2e.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#block-pichincha-theme-content iframe').contentFrame().locator('.bp-select-multiple__list-item').filter({ hasText: /24 meses/i }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Pasar al contenido principal" [ref=e2]:
    - /url: "#main-content"
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Menú principal" [ref=e8] [cursor=pointer]:
            - generic [ref=e14]: Menú
          - generic:                                                                            
        - link "Banco Pichincha, página de inicio" [ref=e15]:
          - /url: /
          - img "Banco Pichincha, página de inicio" [ref=e16]
        - generic [ref=e17]:
          - button "Buscar" [ref=e18] [cursor=pointer]:
            - img "Buscar" [ref=e19]
          - link "Abre tu cuenta" [ref=e20]:
            - /url: https://micuenta.pichincha.com/transaccional/autogestion
          - navigation "Menú de cuenta de usuario" [ref=e21]:
            - paragraph [ref=e22]: Menú de cuenta de usuario
            - generic [ref=e23]:
              - button "Acceso clientes" [ref=e24] [cursor=pointer]
              - text: 
    - main [ref=e25]:
      - generic [ref=e26]:
        - navigation "Ruta de exploración" [ref=e29]:
          - list [ref=e30]:
            - listitem [ref=e31]:
              - link "Inicio" [ref=e32]:
                - /url: /
              - text: /
            - listitem [ref=e33]:
              - generic [ref=e34]: Personas
              - text: /
            - listitem [ref=e35]:
              - link "Créditos" [ref=e36]:
                - /url: /detalle-catalogo/personas-prestamos
              - text: /
            - listitem [ref=e37]:
              - generic [ref=e38]: Servicios
              - text: /
            - listitem [ref=e39]:
              - link "Simulador de Crédito" [ref=e40]:
                - /url: /detalle-producto/simulador-de-credito
        - article [ref=e42]:
          - generic [ref=e43]:
            - article [ref=e49]:
              - generic [ref=e51]:
                - generic [ref=e52]:
                  - heading "Simulador de Crédito" [level=1] [ref=e53]
                  - paragraph [ref=e54]: Calcula tu cuota mensual basada en el valor del préstamo que deseas solicitar.
                - img "Simulador de crédito." [ref=e56]
            - button "Simulador de Crédito" [ref=e61]:
              - paragraph [ref=e62]: Simulador de Crédito
            - paragraph [ref=e70]:
              - iframe [active] [ref=e71]:
                - generic [ref=f1e1]:
                  - generic [ref=f1e4]:
                    - generic [ref=f1e5]:
                      - heading "¿Que crédito necesitas?" [level=2] [ref=f1e7]:
                        - generic: ¿Que crédito necesitas?
                      - generic [ref=f1e12]:
                        - paragraph [ref=f1e15]:
                          - generic: PRECISO
                        - generic [ref=f1e17] [cursor=pointer]:
                          - generic: arrow_drop_down
                    - paragraph [ref=f1e19]:
                      - generic: Ingresa los siguientes datos para empezar la simulación
                    - generic [ref=f1e20]:
                      - generic [ref=f1e21]:
                        - generic [ref=f1e23]:
                          - paragraph [ref=f1e26]:
                            - generic: ¿Cuánto dinero necesitas que te prestemos?
                          - generic [ref=f1e27]:
                            - paragraph [ref=f1e29]:
                              - generic: $
                            - generic [ref=f1e30]:
                              - textbox "0" [ref=f1e31]: "30.000"
                              - generic [ref=f1e34]:
                                - generic: check_circle
                          - paragraph [ref=f1e38]:
                            - generic: Min. $300,00
                        - generic [ref=f1e40]:
                          - paragraph [ref=f1e43]:
                            - generic: ¿En cuanto tiempo quieres pagarlo?
                          - generic [ref=f1e44]:
                            - generic [ref=f1e45]:
                              - paragraph [ref=f1e47]:
                                - generic: Selecciona un plazo
                              - generic [ref=f1e49] [cursor=pointer]:
                                - generic: arrow_drop_down
                            - list [ref=f1e50]:
                              - listitem [ref=f1e51]:
                                - generic "3 meses" [ref=f1e52]:
                                  - paragraph [ref=f1e53]:
                                    - generic: 3 meses
                              - listitem [ref=f1e54]:
                                - generic "4 meses" [ref=f1e55]:
                                  - paragraph [ref=f1e56]:
                                    - generic: 4 meses
                              - listitem [ref=f1e57]:
                                - generic "5 meses" [ref=f1e58]:
                                  - paragraph [ref=f1e59]:
                                    - generic: 5 meses
                              - listitem [ref=f1e60]:
                                - generic "6 meses" [ref=f1e61]:
                                  - paragraph [ref=f1e62]:
                                    - generic: 6 meses
                              - listitem [ref=f1e63]:
                                - generic "7 meses" [ref=f1e64]:
                                  - paragraph [ref=f1e65]:
                                    - generic: 7 meses
                              - listitem [ref=f1e66]:
                                - generic "8 meses" [ref=f1e67]:
                                  - paragraph [ref=f1e68]:
                                    - generic: 8 meses
                              - listitem [ref=f1e69]:
                                - generic "9 meses" [ref=f1e70]:
                                  - paragraph [ref=f1e71]:
                                    - generic: 9 meses
                              - listitem [ref=f1e72]:
                                - generic "10 meses" [ref=f1e73]:
                                  - paragraph [ref=f1e74]:
                                    - generic: 10 meses
                              - listitem [ref=f1e75]:
                                - generic "11 meses" [ref=f1e76]:
                                  - paragraph [ref=f1e77]:
                                    - generic: 11 meses
                              - listitem [ref=f1e78]:
                                - generic "1 año" [ref=f1e79]:
                                  - paragraph [ref=f1e80]:
                                    - generic: 1 año
                              - listitem [ref=f1e81]:
                                - generic "1 año y 1 mes" [ref=f1e82]:
                                  - paragraph [ref=f1e83]:
                                    - generic: 1 año y 1 mes
                              - listitem [ref=f1e84]:
                                - generic "1 año y 2 meses" [ref=f1e85]:
                                  - paragraph [ref=f1e86]:
                                    - generic: 1 año y 2 meses
                              - listitem [ref=f1e87]:
                                - generic "1 año y 3 meses" [ref=f1e88]:
                                  - paragraph [ref=f1e89]:
                                    - generic: 1 año y 3 meses
                              - listitem [ref=f1e90]:
                                - generic "1 año y 4 meses" [ref=f1e91]:
                                  - paragraph [ref=f1e92]:
                                    - generic: 1 año y 4 meses
                              - listitem [ref=f1e93]:
                                - generic "1 año y 5 meses" [ref=f1e94]:
                                  - paragraph [ref=f1e95]:
                                    - generic: 1 año y 5 meses
                              - listitem [ref=f1e96]:
                                - generic "1 año y 6 meses" [ref=f1e97]:
                                  - paragraph [ref=f1e98]:
                                    - generic: 1 año y 6 meses
                              - listitem [ref=f1e99]:
                                - generic "1 año y 7 meses" [ref=f1e100]:
                                  - paragraph [ref=f1e101]:
                                    - generic: 1 año y 7 meses
                              - listitem [ref=f1e102]:
                                - generic "1 año y 8 meses" [ref=f1e103]:
                                  - paragraph [ref=f1e104]:
                                    - generic: 1 año y 8 meses
                              - listitem [ref=f1e105]:
                                - generic "1 año y 9 meses" [ref=f1e106]:
                                  - paragraph [ref=f1e107]:
                                    - generic: 1 año y 9 meses
                              - listitem [ref=f1e108]:
                                - generic "1 año y 10 meses" [ref=f1e109]:
                                  - paragraph [ref=f1e110]:
                                    - generic: 1 año y 10 meses
                              - listitem [ref=f1e111]:
                                - generic "1 año y 11 meses" [ref=f1e112]:
                                  - paragraph [ref=f1e113]:
                                    - generic: 1 año y 11 meses
                              - listitem [ref=f1e114]:
                                - generic "2 años" [ref=f1e115]:
                                  - paragraph [ref=f1e116]:
                                    - generic: 2 años
                              - listitem [ref=f1e117]:
                                - generic "2 años y 1 mes" [ref=f1e118]:
                                  - paragraph [ref=f1e119]:
                                    - generic: 2 años y 1 mes
                              - listitem [ref=f1e120]:
                                - generic "2 años y 2 meses" [ref=f1e121]:
                                  - paragraph [ref=f1e122]:
                                    - generic: 2 años y 2 meses
                              - listitem [ref=f1e123]:
                                - generic "2 años y 3 meses" [ref=f1e124]:
                                  - paragraph [ref=f1e125]:
                                    - generic: 2 años y 3 meses
                              - listitem [ref=f1e126]:
                                - generic "2 años y 4 meses" [ref=f1e127]:
                                  - paragraph [ref=f1e128]:
                                    - generic: 2 años y 4 meses
                              - listitem [ref=f1e129]:
                                - generic "2 años y 5 meses" [ref=f1e130]:
                                  - paragraph [ref=f1e131]:
                                    - generic: 2 años y 5 meses
                              - listitem [ref=f1e132]:
                                - generic "2 años y 6 meses" [ref=f1e133]:
                                  - paragraph [ref=f1e134]:
                                    - generic: 2 años y 6 meses
                              - listitem [ref=f1e135]:
                                - generic "2 años y 7 meses" [ref=f1e136]:
                                  - paragraph [ref=f1e137]:
                                    - generic: 2 años y 7 meses
                              - listitem [ref=f1e138]:
                                - generic "2 años y 8 meses" [ref=f1e139]:
                                  - paragraph [ref=f1e140]:
                                    - generic: 2 años y 8 meses
                              - listitem [ref=f1e141]:
                                - generic "2 años y 9 meses" [ref=f1e142]:
                                  - paragraph [ref=f1e143]:
                                    - generic: 2 años y 9 meses
                              - listitem [ref=f1e144]:
                                - generic "2 años y 10 meses" [ref=f1e145]:
                                  - paragraph [ref=f1e146]:
                                    - generic: 2 años y 10 meses
                              - listitem [ref=f1e147]:
                                - generic "2 años y 11 meses" [ref=f1e148]:
                                  - paragraph [ref=f1e149]:
                                    - generic: 2 años y 11 meses
                              - listitem [ref=f1e150]:
                                - generic "3 años" [ref=f1e151]:
                                  - paragraph [ref=f1e152]:
                                    - generic: 3 años
                              - listitem [ref=f1e153]:
                                - generic "3 años y 1 mes" [ref=f1e154]:
                                  - paragraph [ref=f1e155]:
                                    - generic: 3 años y 1 mes
                              - listitem [ref=f1e156]:
                                - generic "3 años y 2 meses" [ref=f1e157]:
                                  - paragraph [ref=f1e158]:
                                    - generic: 3 años y 2 meses
                              - listitem [ref=f1e159]:
                                - generic "3 años y 3 meses" [ref=f1e160]:
                                  - paragraph [ref=f1e161]:
                                    - generic: 3 años y 3 meses
                              - listitem [ref=f1e162]:
                                - generic "3 años y 4 meses" [ref=f1e163]:
                                  - paragraph [ref=f1e164]:
                                    - generic: 3 años y 4 meses
                              - listitem [ref=f1e165]:
                                - generic "3 años y 5 meses" [ref=f1e166]:
                                  - paragraph [ref=f1e167]:
                                    - generic: 3 años y 5 meses
                              - listitem [ref=f1e168]:
                                - generic "3 años y 6 meses" [ref=f1e169]:
                                  - paragraph [ref=f1e170]:
                                    - generic: 3 años y 6 meses
                              - listitem [ref=f1e171]:
                                - generic "3 años y 7 meses" [ref=f1e172]:
                                  - paragraph [ref=f1e173]:
                                    - generic: 3 años y 7 meses
                              - listitem [ref=f1e174]:
                                - generic "3 años y 8 meses" [ref=f1e175]:
                                  - paragraph [ref=f1e176]:
                                    - generic: 3 años y 8 meses
                              - listitem [ref=f1e177]:
                                - generic "3 años y 9 meses" [ref=f1e178]:
                                  - paragraph [ref=f1e179]:
                                    - generic: 3 años y 9 meses
                              - listitem [ref=f1e180]:
                                - generic "3 años y 10 meses" [ref=f1e181]:
                                  - paragraph [ref=f1e182]:
                                    - generic: 3 años y 10 meses
                              - listitem [ref=f1e183]:
                                - generic "3 años y 11 meses" [ref=f1e184]:
                                  - paragraph [ref=f1e185]:
                                    - generic: 3 años y 11 meses
                              - listitem [ref=f1e186]:
                                - generic "4 años" [ref=f1e187]:
                                  - paragraph [ref=f1e188]:
                                    - generic: 4 años
                              - listitem [ref=f1e189]:
                                - generic "4 años y 1 mes" [ref=f1e190]:
                                  - paragraph [ref=f1e191]:
                                    - generic: 4 años y 1 mes
                              - listitem [ref=f1e192]:
                                - generic "4 años y 2 meses" [ref=f1e193]:
                                  - paragraph [ref=f1e194]:
                                    - generic: 4 años y 2 meses
                              - listitem [ref=f1e195]:
                                - generic "4 años y 3 meses" [ref=f1e196]:
                                  - paragraph [ref=f1e197]:
                                    - generic: 4 años y 3 meses
                              - listitem [ref=f1e198]:
                                - generic "4 años y 4 meses" [ref=f1e199]:
                                  - paragraph [ref=f1e200]:
                                    - generic: 4 años y 4 meses
                              - listitem [ref=f1e201]:
                                - generic "4 años y 5 meses" [ref=f1e202]:
                                  - paragraph [ref=f1e203]:
                                    - generic: 4 años y 5 meses
                              - listitem [ref=f1e204]:
                                - generic "4 años y 6 meses" [ref=f1e205]:
                                  - paragraph [ref=f1e206]:
                                    - generic: 4 años y 6 meses
                              - listitem [ref=f1e207]:
                                - generic "4 años y 7 meses" [ref=f1e208]:
                                  - paragraph [ref=f1e209]:
                                    - generic: 4 años y 7 meses
                              - listitem [ref=f1e210]:
                                - generic "4 años y 8 meses" [ref=f1e211]:
                                  - paragraph [ref=f1e212]:
                                    - generic: 4 años y 8 meses
                              - listitem [ref=f1e213]:
                                - generic "4 años y 9 meses" [ref=f1e214]:
                                  - paragraph [ref=f1e215]:
                                    - generic: 4 años y 9 meses
                              - listitem [ref=f1e216]:
                                - generic "4 años y 10 meses" [ref=f1e217]:
                                  - paragraph [ref=f1e218]:
                                    - generic: 4 años y 10 meses
                              - listitem [ref=f1e219]:
                                - generic "4 años y 11 meses" [ref=f1e220]:
                                  - paragraph [ref=f1e221]:
                                    - generic: 4 años y 11 meses
                              - listitem [ref=f1e222]:
                                - generic "5 años" [ref=f1e223]:
                                  - paragraph [ref=f1e224]:
                                    - generic: 5 años
                        - generic [ref=f1e226]:
                          - paragraph [ref=f1e228]:
                            - generic: ¿Como quieres pagar tus intereses?
                          - generic [ref=f1e229]:
                            - generic [ref=f1e230] [cursor=pointer]:
                              - radio "Método Francés Cuotas se mantienen fijas en el tiempo"
                              - paragraph [ref=f1e232]:
                                - generic: Método Francés
                              - paragraph [ref=f1e234]:
                                - generic: Cuotas se mantienen fijas en el tiempo
                            - generic [ref=f1e235] [cursor=pointer]:
                              - radio "Método Alemán Cuotas variables que decrecen en el tiempo"
                              - paragraph [ref=f1e237]:
                                - generic: Método Alemán
                              - paragraph [ref=f1e239]:
                                - generic: Cuotas variables que decrecen en el tiempo
                        - button "Simular" [disabled] [ref=f1e241]:
                          - generic:
                            - paragraph:
                              - generic: Simular
                      - generic [ref=f1e244]:
                        - generic [ref=f1e245]:
                          - paragraph [ref=f1e247]:
                            - generic: Tus pagos mensuales serán
                          - generic [ref=f1e248]:
                            - generic [ref=f1e249]:
                              - generic [ref=f1e250]:
                                - paragraph [ref=f1e251]:
                                  - generic: $0
                                - paragraph [ref=f1e252]:
                                  - generic: Capital
                              - paragraph [ref=f1e254]:
                                - generic: +
                              - generic [ref=f1e255]:
                                - paragraph [ref=f1e256]:
                                  - generic: $0
                                - paragraph [ref=f1e257]:
                                  - generic: Interés
                              - paragraph [ref=f1e259]:
                                - generic: +
                              - generic [ref=f1e260]:
                                - paragraph [ref=f1e261]:
                                  - generic: $0
                                - paragraph [ref=f1e262]:
                                  - generic: Seguro
                            - paragraph [ref=f1e265]:
                              - generic: $0
                            - generic [ref=f1e266]:
                              - paragraph [ref=f1e268]:
                                - generic:
                                  - text: Durante
                                  - strong [ref=f1e269]: "0"
                              - paragraph [ref=f1e271]:
                                - generic:
                                  - text: Con una tasa de interés referencial
                                  - strong [ref=f1e272]: 0%
                        - generic [ref=f1e273]:
                          - paragraph [ref=f1e275]:
                            - generic: Detalle de tu crédito
                          - generic [ref=f1e276]:
                            - generic [ref=f1e277]:
                              - paragraph [ref=f1e279]:
                                - generic: "Capital:"
                              - paragraph [ref=f1e281]:
                                - generic: $0
                            - generic [ref=f1e282]:
                              - paragraph [ref=f1e284]:
                                - generic: "Total de interés:"
                              - paragraph [ref=f1e286]:
                                - generic: $0
                            - generic [ref=f1e287]:
                              - paragraph [ref=f1e289]:
                                - generic: "Total seguro de desgravamen:"
                              - paragraph [ref=f1e291]:
                                - generic: $0
                          - generic [ref=f1e293]:
                            - paragraph [ref=f1e295]:
                              - generic: "Total a pagar:"
                            - paragraph [ref=f1e297]:
                              - generic: $0
                        - paragraph [ref=f1e299]:
                          - generic: "*Valores referenciales, no son considerados como una oferta formal de préstamo.La oferta definitiva está sujeta al cumplimiento de las condiciones y políticas referentes a capacidad de pago."
                        - generic [ref=f1e300]:
                          - text: Ver tabla de amortización
                          - button "Ver tabla de amortización" [ref=f1e301]:
                            - paragraph [ref=f1e304]:
                              - generic: Ver tabla de amortización
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - paragraph:
                              - generic: Tabla de amortización
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - paragraph:
                                    - generic: "Producto:"
                                - generic:
                                  - paragraph:
                                    - generic:
                                      - strong
                              - generic:
                                - generic:
                                  - paragraph:
                                    - generic: "Plazo (meses):"
                                - generic:
                                  - paragraph:
                                    - generic:
                                      - strong: "0"
                              - generic:
                                - generic:
                                  - paragraph:
                                    - generic: "Tasa de interés nominal:"
                                - generic:
                                  - paragraph:
                                    - generic:
                                      - strong: 0%
                              - generic:
                                - generic:
                                  - paragraph:
                                    - generic: "Tasa de interes efectiva anual:"
                                - generic:
                                  - paragraph:
                                    - generic:
                                      - strong: 0%
                            - generic:
                              - generic:
                                - generic:
                                  - paragraph:
                                    - generic: "Capital:"
                                - generic:
                                  - paragraph:
                                    - generic:
                                      - strong: $0
                              - generic:
                                - generic:
                                  - paragraph:
                                    - generic: "Total de interés:"
                                - generic:
                                  - paragraph:
                                    - generic:
                                      - strong: $0
                              - generic:
                                - generic:
                                  - paragraph:
                                    - generic: "Total seguro de desgravamen:"
                                - generic:
                                  - paragraph:
                                    - generic:
                                      - strong: $0
                        - generic:
                          - table "Tabla de amortización":
                            - rowgroup:
                              - row "Cuotas Fecha de pago Capital Interés Seguros desg. Seguro Incendios/Vehiculo Valor cuota Saldo":
                                - columnheader "Cuotas":
                                  - paragraph:
                                    - generic: Cuotas
                                - columnheader "Fecha de pago":
                                  - paragraph:
                                    - generic: Fecha de pago
                                - columnheader "Capital":
                                  - paragraph:
                                    - generic: Capital
                                - columnheader "Interés":
                                  - paragraph:
                                    - generic: Interés
                                - columnheader "Seguros desg.":
                                  - paragraph:
                                    - generic: Seguros desg.
                                - columnheader "Seguro Incendios/Vehiculo":
                                  - paragraph:
                                    - generic: Seguro Incendios/Vehiculo
                                - columnheader "Valor cuota":
                                  - paragraph:
                                    - generic: Valor cuota
                                - columnheader "Saldo":
                                  - paragraph:
                                    - generic: Saldo
                            - rowgroup:
                              - row "No hay datos disponibles":
                                - cell "No hay datos disponibles"
                  - iframe [ref=f1e308]:
                    - generic [ref=f4e6]:
                      - text: protected by
                      - strong [ref=f4e7]: reCAPTCHA
            - article [ref=e77]:
              - generic [ref=e78]:
                - paragraph [ref=e79]: Beneficios
                - heading "Descubre las ventajas de nuestros créditos." [level=2] [ref=e80]
                - paragraph [ref=e82]: Explora los beneficios que tenemos para ti y así cubrir tus necesidades financieras.
              - list [ref=e83]:
                - listitem [ref=e84]:
                  - article [ref=e86]:
                    - generic [ref=e90]:
                      - generic [ref=e91]: Imagen
                      - img [ref=e93]
                    - paragraph [ref=e94]: Flexibilidad en monto y plazo
                - listitem [ref=e95]:
                  - article [ref=e97]:
                    - generic [ref=e101]:
                      - generic [ref=e102]: Imagen
                      - img [ref=e104]
                    - paragraph [ref=e105]: Tasas competitivas
                - listitem [ref=e106]:
                  - article [ref=e108]:
                    - generic [ref=e112]:
                      - generic [ref=e113]: Imagen
                      - img [ref=e115]
                    - paragraph [ref=e116]: Créditos rápidos y efectivos
            - article [ref=e122]:
              - generic [ref=e123]:
                - heading "Preguntas frecuentes" [level=2] [ref=e126]
                - generic [ref=e128]:
                  - tablist
                  - tabpanel "N/A" [ref=e130]:
                    - generic [ref=e131]:
                      - heading "¿Para qué sirve el simulador?" [level=3] [ref=e133]:
                        - button "¿Para qué sirve el simulador?" [ref=e134] [cursor=pointer]
                      - heading "¿Los valores son los finales?" [level=3] [ref=e136]:
                        - button "¿Los valores son los finales?" [ref=e137] [cursor=pointer]
                      - heading "¿Puedo simular más de una vez?" [level=3] [ref=e139]:
                        - button "¿Puedo simular más de una vez?" [ref=e140] [cursor=pointer]
    - contentinfo [ref=e141]:
      - generic [ref=e142]:
        - generic [ref=e143]:
          - img "Banco Pichincha" [ref=e145]: ">"
          - generic [ref=e149]:
            - navigation "Menú de contacto del pie de página" [ref=e152]:
              - paragraph [ref=e153]: Menú de contacto del pie de página
              - list [ref=e154]:
                - listitem [ref=e155]:
                  - generic [ref=e156]: Contacto y ayuda
                  - list [ref=e158]:
                    - listitem [ref=e159]:
                      - link " Centro de ayuda" [ref=e160]:
                        - /url: https://soporte.pichincha.com/hc/es-419/
                      - paragraph [ref=e163]: Consultas
                    - listitem [ref=e164]:
                      - link " Encuentra tu Banco" [ref=e165]:
                        - /url: https://www.pichincha.com/mapa
                      - paragraph [ref=e168]: Mapa
                    - listitem [ref=e169]:
                      - link " (02) 2999 999" [ref=e170]:
                        - /url: tel:+593 22999 999
                      - paragraph [ref=e173]: Banca telefónica
                    - listitem [ref=e174]:
                      - link " 096 299 2999" [ref=e175]:
                        - /url: https://api.whatsapp.com/send/?phone=593962992999&text=&type=phone_number&app_absent=0
                      - paragraph [ref=e178]: WhatsApp
                - listitem [ref=e179]:
                  - link "Sugerencias y reclamos" [ref=e180]:
                    - /url: /sugerencias-y-reclamos
            - navigation "Pie de página" [ref=e183]:
              - paragraph [ref=e184]: Pie de página
              - list [ref=e185]:
                - listitem [ref=e186]:
                  - generic [ref=e187]: Canales de atención
                  - list [ref=e188]:
                    - listitem [ref=e189]:
                      - link "Banca Web" [ref=e190]:
                        - /url: /banca-web
                    - listitem [ref=e191]:
                      - link "Banca Móvil" [ref=e192]:
                        - /url: /banca-movil
                    - listitem [ref=e193]:
                      - link "Mi Vecino" [ref=e194]:
                        - /url: /mi-vecino
                    - listitem [ref=e195]:
                      - link "Deuna!" [ref=e196]:
                        - /url: /deuna
                    - listitem [ref=e197]:
                      - link "Ver todos" [ref=e198]:
                        - /url: /detalle-catalogo/personas-servicios
                - listitem [ref=e199]:
                  - generic [ref=e200]: Para tu interés
                  - list [ref=e201]:
                    - listitem [ref=e202]:
                      - link "Crédito de consumo" [ref=e203]:
                        - /url: /detalle-producto/personas-prestamo-linea-abierta
                    - listitem [ref=e204]:
                      - link "Crédito hipotecario" [ref=e205]:
                        - /url: /detalle-producto/personas-credito-hipotecario-de-vivienda
                    - listitem [ref=e206]:
                      - link "Cuenta de ahorro flexible" [ref=e207]:
                        - /url: /detalle-producto/personas-cuentas-ahorro-flexible
                    - listitem [ref=e208]:
                      - link "Depósito a plazo" [ref=e209]:
                        - /url: /detalle-producto/personas-inversiones-plazodolar
                    - listitem [ref=e210]:
                      - link "Venta de bienes" [ref=e211]:
                        - /url: https://www.pichincha.com/sites/default/files/documents/2026-04/bienes-a-la-venta-abril-2026.pdf
                    - listitem [ref=e212]:
                      - link "Programa Beta Testers" [ref=e213]:
                        - /url: /betatesters
                    - listitem [ref=e214]:
                      - link "Tips de seguridad" [ref=e215]:
                        - /url: /catalogo-seguridad
                - listitem [ref=e216]:
                  - generic [ref=e217]: Sobre nosotros
                  - list [ref=e218]:
                    - listitem [ref=e219]:
                      - link "Tasas y tarifas" [ref=e220]:
                        - /url: /transparencia
                    - listitem [ref=e221]:
                      - link "Trabaja con nosotros" [ref=e222]:
                        - /url: https://vacantes.pichincha.com/
                    - listitem [ref=e223]:
                      - link "¿Quiénes somos?" [ref=e224]:
                        - /url: /catalogo-conoce-tu-banco
                    - listitem [ref=e225]:
                      - link "Lo que ofrecemos" [ref=e226]:
                        - /url: /lo-que-ofrecemos
                    - listitem [ref=e227]:
                      - link "Transparencia" [ref=e228]:
                        - /url: /transparencia
                    - listitem [ref=e229]:
                      - link "Desarrollo sostenible" [ref=e230]:
                        - /url: /catalogo-desarrollo-sostenible
        - generic [ref=e231]:
          - generic [ref=e232]:
            - navigation "Menú de redes sociales del pie de página" [ref=e235]:
              - paragraph [ref=e236]: Menú de redes sociales del pie de página
              - list [ref=e237]:
                - listitem [ref=e238]:
                  - link "Instagram" [ref=e239]:
                    - /url: https://www.instagram.com/bancopichincha/
                - listitem [ref=e240]:
                  - link "Facebook" [ref=e241]:
                    - /url: https://www.facebook.com/BancoPichinchaEcuador/
                - listitem [ref=e242]:
                  - link "X" [ref=e243]:
                    - /url: https://twitter.com/BancoPichincha
                - listitem [ref=e244]:
                  - link "Youtube" [ref=e245]:
                    - /url: https://www.youtube.com/user/BancoPichinchaCA
                - listitem [ref=e246]:
                  - link "Linkedin" [ref=e247]:
                    - /url: https://www.linkedin.com/company/banco-pichincha-ca
                - listitem [ref=e248]:
                  - link "Tiktok" [ref=e249]:
                    - /url: https://www.tiktok.com/@bancopichincha
            - navigation "Legal" [ref=e252]:
              - paragraph [ref=e253]: Legal
              - list [ref=e254]:
                - listitem [ref=e255]:
                  - link "Legal" [ref=e256]:
                    - /url: /informacion-legal
                - listitem
          - navigation "Apps" [ref=e259]:
            - paragraph [ref=e260]: Apps
            - list [ref=e261]:
              - listitem [ref=e262]:
                - generic [ref=e263]: Pichincha Banca Móvil
                - generic [ref=e264]:
                  - list [ref=e265]:
                    - listitem [ref=e266]:
                      - link "App store" [ref=e267]:
                        - /url: https://apps.apple.com/ec/app/pichincha-banca-movil/id999191728?mt=8
                      - paragraph [ref=e270]:
                        - img [ref=e271]
                    - listitem [ref=e272]:
                      - link "Play Store" [ref=e273]:
                        - /url: https://play.google.com/store/apps/details?id=com.yellowpepper.pichincha&hl=en_US
                      - paragraph [ref=e276]:
                        - img [ref=e277]
                    - listitem [ref=e278]:
                      - link "App gallery" [ref=e279]:
                        - /url: https://consumer.huawei.com/latin/mobileservices/appgallery/
                      - paragraph [ref=e282]:
                        - img [ref=e283]
                  - paragraph [ref=e285]: Descarga nuestra aplicación
```

# Test source

```ts
  57  |   await this.seleccionarTipoCredito(datos.tipoCredito);
  58  | 
  59  |   if (datos.montoVivienda) {
  60  |     await this.ingresarMontoVivienda(datos.montoVivienda);
  61  |   }
  62  | 
  63  |   await this.ingresarMontoDeseado(datos.montoDeseado);
  64  |   await this.seleccionarPlazo(datos.plazo);
  65  |   await this.seleccionarAmortizacion();
  66  |   await this.simular();
  67  |   }
  68  | 
  69  |   async seleccionarTipoCredito(tipo: string) {
  70  |   const frame = this.simuladorFrame();
  71  |   await frame
  72  |     .locator("div")
  73  |     .filter({ hasText: /Selecciona un tipo de crédito/i })
  74  |     .nth(2)
  75  |     .click();
  76  | 
  77  |   const opciones = frame.locator(".bp-select-multiple__list-item");
  78  |   await expect(opciones.first()).toBeVisible({ timeout: 10000 });
  79  |   await opciones
  80  |     .filter({ hasText: new RegExp(tipo, "i") })
  81  |     .click();
  82  |   }
  83  | 
  84  |  async ingresarMontoDeseado(monto: string) {
  85  |   const frame = this.simuladorFrame();
  86  |   await frame
  87  |     .getByRole("textbox")
  88  |     .last()
  89  |     .fill(monto);
  90  | }
  91  | async ingresarMontoVivienda(monto: string) {
  92  |   const frame = this.simuladorFrame();
  93  |   await frame
  94  |     .getByRole("textbox")
  95  |     .first()
  96  |     .fill(monto);
  97  | }
  98  | 
  99  | async seleccionarPlazo(plazo: string) {
  100 |   await this.limpiarOverlays();
  101 | 
  102 |   const frame = this.simuladorFrame();
  103 | 
  104 |   // Validar que el formulario ya cargó el plazo
  105 |   await expect(frame.locator("body")).toContainText(
  106 |     /Selecciona un plazo/i,
  107 |     {
  108 |       timeout: 10000,
  109 |     }
  110 |   );
  111 | 
  112 |   // Combo plazo
  113 |   const comboPlazo = frame
  114 |     .locator(".bp-select-multiple")
  115 |     .filter({ hasText: /Selecciona un plazo/i })
  116 |     .last();
  117 | 
  118 |   await expect(comboPlazo).toBeVisible({
  119 |     timeout: 10000,
  120 |   });
  121 | 
  122 |   await comboPlazo.scrollIntoViewIfNeeded();
  123 | 
  124 |   // Click en área realmente clickeable
  125 |   await comboPlazo
  126 |     .locator(".bp-select-multiple__input-container")
  127 |     .click({ force: true });
  128 | 
  129 |   // Espera pequeña para render dropdown
  130 |   await this.page.waitForTimeout(500);
  131 | 
  132 |   // Opciones
  133 |   const opciones = frame.locator(".bp-select-multiple__list-item");
  134 | 
  135 |   const cantidadOpciones = await opciones.count();
  136 | 
  137 |   console.log("Cantidad opciones plazo:", cantidadOpciones);
  138 | 
  139 |   // Debug completo
  140 |   console.log(
  141 |     "Texto body después abrir plazo:"
  142 |   );
  143 | 
  144 |   console.log(
  145 |     await frame.locator("body").innerText()
  146 |   );
  147 | 
  148 |   // Validación
  149 |   expect(cantidadOpciones).toBeGreaterThan(0);
  150 | 
  151 |   // Seleccionar plazo
  152 |   await opciones
  153 |     .filter({
  154 |       hasText: new RegExp(plazo, "i"),
  155 |     })
  156 |     .first()
> 157 |     .click({ force: true });
      |      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  158 | 
  159 |   console.log("Plazo seleccionado:", plazo);
  160 | }
  161 | 
  162 | async seleccionarAmortizacion() {
  163 |   const frame = this.simuladorFrame();
  164 | 
  165 |   await frame
  166 |     .locator(".radio-item__input__desciption > .typography")
  167 |     .first()
  168 |     .click({ force: true });
  169 | }
  170 | async simular() {
  171 |   const frame = this.simuladorFrame();
  172 |   const btnSimular = frame.getByRole("button", {name: /simular/i});
  173 |   await expect(btnSimular).toBeVisible({ timeout: 10000 });
  174 |   await expect(btnSimular).toBeEnabled({ timeout: 10000 });
  175 |   await btnSimular.click();
  176 | }
  177 | 
  178 | async validarCuotaMensual() {
  179 |   const frame = this.simuladorFrame();
  180 | 
  181 |   const resultado = frame.locator(
  182 |     ".simulation-container__quota__detail"
  183 |   );
  184 | 
  185 |   await expect(resultado).toContainText(
  186 |     /\$\d+[.,]\d{2}/,
  187 |     {
  188 |       timeout: 30000,
  189 |     }
  190 |   );
  191 | }
  192 | async validarTasaInteres() {
  193 |   const frame = this.simuladorFrame();
  194 | 
  195 |   const resultado = frame.locator(
  196 |     ".simulation-container__quota__detail"
  197 |   );
  198 | 
  199 |   await expect(
  200 |     resultado.getByText(/tasa de interés referencial/i)
  201 |   ).toBeVisible();
  202 | 
  203 |   await expect(
  204 |     resultado.getByText(/\d+[.,]?\d*%/)
  205 |   ).toBeVisible();
  206 | }
  207 | async validarTablaAmortizacion() {
  208 |   const frame = this.simuladorFrame();
  209 | 
  210 |   await frame
  211 |     .getByRole("button", {
  212 |       name: /ver tabla de amortización/i,
  213 |     })
  214 |     .click();
  215 | 
  216 |   await expect(
  217 |     frame.locator(".modal_header")
  218 |   ).toBeVisible({
  219 |     timeout: 10000,
  220 |   });
  221 | }
  222 | async validarMensajeError() {
  223 |   const frame = this.simuladorFrame();
  224 | 
  225 |   await expect(
  226 |     frame.getByText(/mínimo|máximo|inválido|ingresa|obligatorio/i)
  227 |   ).toBeVisible({ timeout: 10000 });
  228 | }
  229 | 
  230 | async validarCampoNumerico() {
  231 |   const frame = this.simuladorFrame();
  232 | 
  233 |   const valor = await frame.getByRole("textbox").last().inputValue();
  234 | 
  235 |   console.log("Valor del campo:", valor);
  236 | 
  237 |   expect(valor).not.toBe("abc");
  238 | }
  239 | async obtenerCuotaMensual() {
  240 |   const frame = this.simuladorFrame();
  241 | 
  242 |   const resultado = frame.locator(
  243 |     ".simulation-container__quota__detail"
  244 |   );
  245 | 
  246 |   await expect(resultado).toContainText(
  247 |     /\$\d+[.,]\d{2}/,
  248 |     {
  249 |       timeout: 30000,
  250 |     }
  251 |   );
  252 | 
  253 |   const texto = await resultado.innerText();
  254 | 
  255 |   const valores =
  256 |     texto.match(/\$\d+[.,]\d{2}/g) ?? [];
  257 | 
```