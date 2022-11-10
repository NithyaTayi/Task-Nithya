import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CanvasComponent } from './canvas/canvas.component';
import { EventInspectorComponent } from './event-inspector/event-inspector.component';
import { PropertiesPanelComponent } from './properties-panel/properties-panel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderComponent } from './header/header.component';
import { ObjpalletComponent } from './objpallet/objpallet.component';
import {MatMenuModule} from '@angular/material/menu';
import { DrawshapeService } from './services/drawshape.service';
import { EventsService } from './services/events.service';
import { counterReducer } from './store/our.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    EventInspectorComponent,
    PropertiesPanelComponent,
    ToolbarComponent,
    HeaderComponent,
    ObjpalletComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatMenuModule,
    StoreModule.forRoot({ canvasstate: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [DrawshapeService,EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
