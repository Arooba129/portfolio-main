import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MetaService {
    constructor(
        private titleService: Title,
        private metaService: Meta,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            }),
            mergeMap(route => route.data)
        ).subscribe(data => {
            if (data['title']) {
                this.titleService.setTitle(data['title']);
            }

            // Update meta description if provided in route data (optional enhancement)
            // For this project, we'll keep it simple or set generic defaults
            this.metaService.updateTag({ name: 'description', content: 'Portfolio of Arooba - Full Stack Angular Developer' });
        });
    }
}
