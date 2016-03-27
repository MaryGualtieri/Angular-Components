@Component ({
    selector: ‘talk-cmp’,
    directives: [FormattedRating, WatchButton, RateButton],
    templateUrl: ‘talk_cmp.html’
})

class TalkCmp {
     @Input( ) talk; Talk;
     @Output( ) rate: EventEmitter;
}
