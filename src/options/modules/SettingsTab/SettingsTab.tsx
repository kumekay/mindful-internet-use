import React from 'react'
import {SectionContainer, SectionHeading, TabHeading} from '@option-ui'
import {AfterBreathingSetting} from './AfterBreathingSetting'
import {NumberOfBreathSetting} from './NumberOfBreathSetting'
import {SettingsIcon} from '@utils'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback, errorHandler} from '@ui'
import {MindlessUrlList} from '../WebsitesTab/MindlessUrlList'

export const SettingsTab = () => {
  return (
    <div className="max-w-xl space-y-6 text-amber-50">
      <TabHeading>
        <SettingsIcon />
        Settings
      </TabHeading>

      <SectionContainer>
        <SectionHeading>
          What to do before accessing a mindless website
        </SectionHeading>
        <AfterBreathingSetting />
      </SectionContainer>

      <SectionContainer>
        <SectionHeading>Number of breath on breathing timer</SectionHeading>
        <NumberOfBreathSetting />
      </SectionContainer>
    </div>
  )
}
