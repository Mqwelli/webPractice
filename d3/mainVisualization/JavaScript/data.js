const processors = [
            {
                'Name': 'AMD Ryzen™ 7 PRO 8700GE',
                'Architecture': 'Zen 4',
                'Year': 2024,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.6,
                'Boost frequency': 5.1
            },
            {
                'Name': 'AMD Ryzen™ 7 PRO 8700G',
                'Architecture': 'Zen 4',
                'Year': 2024,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 4.2,
                'Boost frequency': 5.1
            },
            {
                'Name': 'AMD Ryzen™ 5 PRO 8600GE',
                'Architecture': 'Zen 4',
                'Year': 2024,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.9,
                'Boost frequency': 5
            },
            {
                'Name': 'AMD Ryzen™ 5 PRO 8600G',
                'Architecture': 'Zen 4',
                'Year': 2024,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.4,
                'Boost frequency': 5
            },
            {
                'Name': 'AMD Ryzen™ 5 9600X',
                'Architecture': 'Zen 5',
                'Year': 2024,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.9,
                'Boost frequency': 5.4
            },
            {
                'Name': 'AMD Ryzen™ 7 9700X',
                'Architecture': 'Zen 5',
                'Year': 2024,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.8,
                'Boost frequency': 5.5
            },
            {
                'Name': 'AMD Ryzen™ 7 9800X3D',
                'Architecture': 'Zen 5',
                'Year': 2024,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 4.7,
                'Boost frequency': 5.2
            },
            {
                'Name': 'AMD Ryzen™ 9 9900X',
                'Architecture': 'Zen 5',
                'Year': 2024,
                'Cores': 12,
                'Threads': 24,
                'Base frequency': 4.4,
                'Boost frequency': 5.5
            },
            {
                'Name': 'AMD Ryzen™ 9 9950X3D',
                'Architecture': 'Zen 5',
                'Year': 2025,
                'Cores': 16,
                'Threads': 32,
                'Base frequency': 4,
                'Boost frequency': 5.6
            },
            {
                'Name': 'AMD Ryzen™ 5 7600X',
                'Architecture': 'Zen 4',
                'Year': 2022,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 4.7,
                'Boost frequency': 5.3
            },
            {
                'Name': 'AMD Ryzen™ 5 7500F',
                'Architecture': 'Zen 4',
                'Year': 2023,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.7,
                'Boost frequency': 5
            },
            {
                'Name': 'AMD Ryzen™ 7 7700',
                'Architecture': 'Zen 4',
                'Year': 2023,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.8,
                'Boost frequency': 5.3
            },
            {
                'Name': 'AMD Ryzen™ 9 7900',
                'Architecture': 'Zen 4',
                'Year': 2023,
                'Cores': 12,
                'Threads': 24,
                'Base frequency': 3.7,
                'Boost frequency': 5.4
            },
            {
                'Name': 'AMD Ryzen™ 9 7950X',
                'Architecture': 'Zen 4',
                'Year': 2022,
                'Cores': 16,
                'Threads': 32,
                'Base frequency': 4.5,
                'Boost frequency': 5.7
            },
            {
                'Name': 'AMD Ryzen™ 3 8300G',
                'Architecture': 'Zen 4',
                'Year': 2024,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.4,
                'Boost frequency': 4.9
            },
            {
                'Name': 'AMD Ryzen™ 3 5300G',
                'Architecture': 'Zen 3',
                'Year': 2021,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 4,
                'Boost frequency': 4.2
            },
            {
                'Name': 'AMD Ryzen™ 5 5500',
                'Architecture': 'Zen 3',
                'Year': 2022,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.6,
                'Boost frequency': 4.2
            },
            {
                'Name': 'AMD Ryzen™ 5 PRO 5650GE',
                'Architecture': 'Zen 3',
                'Year': 2021,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.4,
                'Boost frequency': 4.4
            },
            {
                'Name': 'AMD Ryzen™ 7 5700',
                'Architecture': 'Zen 3',
                'Year': 2022,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.7,
                'Boost frequency': 4.6
            },
            {
                'Name': 'AMD Ryzen™ 7 5700G',
                'Architecture': 'Zen 3',
                'Year': 2021,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.8,
                'Boost frequency': 4.6
            },
            {
                'Name': 'AMD Ryzen™ 5 5600X3D',
                'Architecture': 'Zen 3',
                'Year': 2023,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.3,
                'Boost frequency': 4.4
            },
            {
                'Name': 'AMD Ryzen™ 5 5600X',
                'Architecture': 'Zen 3',
                'Year': 2020,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.7,
                'Boost frequency': 4.6
            },
            {
                'Name': 'AMD Ryzen™ 7 5700X',
                'Architecture': 'Zen 3',
                'Year': 2022,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.4,
                'Boost frequency': 4.6
            },
            {
                'Name': 'AMD Ryzen™ 7 5800X',
                'Architecture': 'Zen 3',
                'Year': 2020,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.8,
                'Boost frequency': 4.7
            },
            {
                'Name': 'AMD Ryzen™ 9 5900',
                'Architecture': 'Zen 3',
                'Year': 2021,
                'Cores': 12,
                'Threads': 24,
                'Base frequency': 3,
                'Boost frequency': 4.7
            },
            {
                'Name': 'AMD Ryzen™ 9 5950X',
                'Architecture': 'Zen 3',
                'Year': 2020,
                'Cores': 16,
                'Threads': 32,
                'Base frequency': 3.4,
                'Boost frequency': 4.9
            },
            {
                'Name': 'AMD Ryzen™ 3 4100',
                'Architecture': 'Zen 2',
                'Year': 2022,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.8,
                'Boost frequency': 4
            },
            {
                'Name': 'AMD Ryzen™ 5 PRO 4650G',
                'Architecture': 'Zen 2',
                'Year': 2020,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.7,
                'Boost frequency': 4.2
            },
            {
                'Name': 'AMD Ryzen™ 7 4700G',
                'Architecture': 'Zen 2',
                'Year': 2020,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.6,
                'Boost frequency': 4.4
            },
            {
                'Name': 'AMD Ryzen™ 3 3300X',
                'Architecture': 'Zen 2',
                'Year': 2020,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.8,
                'Boost frequency': 4.3
            },
            {
                'Name': 'AMD Ryzen™ 5 3600',
                'Architecture': 'Zen 2',
                'Year': 2019,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.6,
                'Boost frequency': 4.2
            },
            {
                'Name': 'AMD Ryzen™ 7 3800X',
                'Architecture': 'Zen 2',
                'Year': 2019,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.9,
                'Boost frequency': 4.5
            },
            {
                'Name': 'AMD Ryzen™ 9 3900X',
                'Architecture': 'Zen 2',
                'Year': 2019,
                'Cores': 12,
                'Threads': 24,
                'Base frequency': 3.8,
                'Boost frequency': 4.6
            },
            {
                'Name': 'AMD Ryzen™ 9 3950X',
                'Architecture': 'Zen 2',
                'Year': 2019,
                'Cores': 16,
                'Threads': 32,
                'Base frequency': 3.5,
                'Boost frequency': 4.7
            },
            {
                'Name': 'AMD Ryzen™ 3 2300X',
                'Architecture': 'Zen 1+ ',
                'Year': 2018,
                'Cores': 4,
                'Threads': 4,
                'Base frequency': 3.5,
                'Boost frequency': 4
            },
            {
                'Name': 'AMD Ryzen™ 5 2500X',
                'Architecture': 'Zen 1+ ',
                'Year': 2018,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.6,
                'Boost frequency': 4
            },
            {
                'Name': 'AMD Ryzen™ 5 1600AF',
                'Architecture': 'Zen 1+ ',
                'Year': 2019,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.2,
                'Boost frequency': 3.6
            },
            {
                'Name': 'AMD Ryzen™ 5 2600',
                'Architecture': 'Zen 1+ ',
                'Year': 2018,
                'Cores': 6,
                'Threads': 12,
                'Base frequency': 3.4,
                'Boost frequency': 3.9
            },
            {
                'Name': 'AMD Ryzen™ 7 2700',
                'Architecture': 'Zen 1+ ',
                'Year': 2018,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.2,
                'Boost frequency': 4.1
            },
            {
                'Name': 'AMD Ryzen™ 3 3200GE',
                'Architecture': 'Zen 1+ ',
                'Year': 2019,
                'Cores': 4,
                'Threads': 4,
                'Base frequency': 3.3,
                'Boost frequency': 4
            },
            {
                'Name': 'AMD Ryzen™ 5 3400G',
                'Architecture': 'Zen 1+ ',
                'Year': 2019,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.7,
                'Boost frequency': 4.2
            },
            {
                'Name': 'AMD Athlon Gold PRO 3150G',
                'Architecture': 'Zen 1+ ',
                'Year': 2020,
                'Cores': 4,
                'Threads': 4,
                'Base frequency': 3.5,
                'Boost frequency': 3.9
            },
            {
                'Name': 'AMD Ryzen™ 3 1300X',
                'Architecture': 'Zen 1 ',
                'Year': 2017,
                'Cores': 4,
                'Threads': 4,
                'Base frequency': 3.4,
                'Boost frequency': 3.7
            },
            {
                'Name': 'AMD Athlon 240GE',
                'Architecture': 'Zen 1 ',
                'Year': 2018,
                'Cores': 2,
                'Threads': 4,
                'Base frequency': 3.5,
                'Boost frequency': 3.5
            },
            {
                'Name': 'AMD Ryzen™ 5 PRO 2400GE',
                'Architecture': 'Zen 1 ',
                'Year': 2018,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.2,
                'Boost frequency': 3.8
            },
            {
                'Name': 'AMD Ryzen™ 7 1700',
                'Architecture': 'Zen 1 ',
                'Year': 2017,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3,
                'Boost frequency': 3.7
            },
            {
                'Name': 'AMD Ryzen™ 7 1800X',
                'Architecture': 'Zen 1 ',
                'Year': 2017,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.6,
                'Boost frequency': 4
            },
            {
                'Name': 'AMD Ryzen™ 5 1400',
                'Architecture': 'Zen 1 ',
                'Year': 2017,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.2,
                'Boost frequency': 3.4
            },
            {
                'Name': 'AMD Ryzen™ 5 PRO 1500',
                'Architecture': 'Zen 1 ',
                'Year': 2017,
                'Cores': 4,
                'Threads': 8,
                'Base frequency': 3.5,
                'Boost frequency': 3.7
            },
            {
                'Name': 'AMD Ryzen™ 7 PRO 1700X',
                'Architecture': 'Zen 1 ',
                'Year': 2017,
                'Cores': 8,
                'Threads': 16,
                'Base frequency': 3.4,
                'Boost frequency': 3.8
            }
        ]