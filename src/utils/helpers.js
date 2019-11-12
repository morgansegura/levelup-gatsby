import React from "react"

export function siteData( url, attr=null, override=null ) {
    const sites = {
        finance101: {
            url:        'https://www.finance101.com',
            nicename:   'Finance 101',
            short:      'finance101',
            alias:      'finance',
            acronymn:   'f101',
        },
        science101: {
            url:        'https://www.science101.com',
            nicename:   'Science 101',
            short:      'science101',
            alias:      'science',
            acronymn:   's101',
        },
        history101: {
            url:        'https://www.history101.com',
            nicename:   'History 101',
            short:      'history101',
            alias:      'history',
            acronymn:   'h101',
        },
        living101: {
            url:        'https://www.living101.com',
            nicename:   'Living 101',
            short:      'living101',
            alias:      'living',
            acronymn:   'l101',
        },
        autos101: {
            url:        'https://www.autos101.com',
            nicename:   'Autos 101',
            short:      'autos101',
            alias:      'autos',
            acronymn:   'a101',
        },
        vacation101: {
            url:        'https://www.vacation101.com',
            nicename:   'Vacation 101',
            short:      'vacation101',
            alias:      'vacation',
            acronymn:   'v101',
        },
        parenting101: {
            url:        'https://www.parenting101.com',
            nicename:   'Parenting 101',
            short:      'parenting101',
            alias:      'parenting',
            acronymn:   'p101',
        },
    }

    let siteObj = undefined
    
    if ( attr === 'full' ) {        
        siteObj = sites
    } else {
        for ( let key in sites ) {
            let siteSpecific = override === null && url.indexOf(key) !== -1 ? key : ( override === key ? override : null )

            if ( siteSpecific !== null ) {
                if ( attr !== null ) {
                    siteObj = sites[key][attr]
                } else {
                    siteObj = sites[key].alias
                }
            }
        }
    }
    return siteObj
}

