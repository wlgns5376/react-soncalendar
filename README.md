# react-soncalendar
한국의 손 없는 날 달력입니다.

2016년 1월 ~ 2025년 12월까지 지원

### Css

```html
<link rel="stylesheet" href="dist/son-calendar.min.css">
```

### Javascript

```html
<script type="text/javascript" src="dist/son-calendar.min.js"></script>
```

### Source

```html
<div id="calendar"></div>
<script type="text/javascript">
var calendar = new SonCalendar('calendar');
</script>
```

### Calendar source

```html
<div class="calendar_wrap">
    <div class="calendar_head">
        <a class="prev_btn"><span>이전 달력 보기</span></a>
        <div class="calendar_title"><span>2017.8</span></div>
        <a class="next_btn"><span>다음 달력 보기</span></a>
    </div>
    <div class="calendar_content_wrap">
        <table class="calendar_content">
            <caption class="blind">손 없는 날 달력</caption>
            <thead>
            <tr>
                <th scope="col"><span>Sun</span></th>
                <th scope="col"><span>Mon</span></th>
                <th scope="col"><span>Tue</span></th>
                <th scope="col"><span>Wed</span></th>
                <th scope="col"><span>Thu</span></th>
                <th scope="col"><span>Fri</span></th>
                <th scope="col"><span>Sat</span></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="prev_month">30</td>
                    <td class="prev_month">31</td>
                    <td class="this_month"><span class="moveday">1</span></td>
                    <td class="this_month"><span class="">2</span></td>
                    <td class="this_month today"><span class="">3</span></td>
                    <td class="this_month"><span class="">4</span></td>
                    <td class="this_month"><span class="sat">5</span></td>
                </tr>
                <tr>
                    <td class="this_month"><span class="sun">6</span></td>
                    <td class="this_month"><span class="">7</span></td>
                    <td class="this_month"><span class="">8</span></td>
                    <td class="this_month"><span class="">9</span></td>
                    <td class="this_month"><span class="moveday">10</span></td>
                    <td class="this_month"><span class="moveday">11</span></td>
                    <td class="this_month"><span class="sat">12</span></td>
                </tr>
                <tr>
                    <td class="this_month"><span class="sun">13</span></td>
                    <td class="this_month"><span class="">14</span></td>
                    <td class="this_month"><span class="">15</span></td>
                    <td class="this_month"><span class="">16</span></td>
                    <td class="this_month"><span class="">17</span></td>
                    <td class="this_month"><span class="">18</span></td>
                    <td class="this_month"><span class="sat">19</span></td>
                </tr>
                <tr>
                    <td class="this_month"><span class="sun moveday">20</span></td>
                    <td class="this_month"><span class="moveday">21</span></td>
                    <td class="this_month"><span class="">22</span></td>
                    <td class="this_month"><span class="">23</span></td>
                    <td class="this_month"><span class="">24</span></td>
                    <td class="this_month"><span class="">25</span></td>
                    <td class="this_month"><span class="sat">26</span></td>
                </tr>
                <tr>
                    <td class="this_month"><span class="sun">27</span></td>
                    <td class="this_month"><span class="">28</span></td>
                    <td class="this_month"><span class="">29</span></td>
                    <td class="this_month"><span class="moveday">30</span></td>
                    <td class="this_month"><span class="moveday">31</span></td>
                    <td class="next_month">1</td>
                    <td class="next_month">2</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
```

## License
MIT